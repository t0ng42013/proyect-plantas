import axios, { AxiosInstance } from "axios";
import { handleTokenExpiration, isTokenNearExpiration } from "./jwtServices";

//configurar Axios
const api:AxiosInstance = axios.create({ 
    baseURL:"http://localhost:8080",
    headers:{
        'Content-Type': 'application/json',
    },
});


//interceptor para adicionar el token 
api.interceptors.request.use((config)=>{
    const token = localStorage.getItem('token');

    if(token){
        config.headers['x-token'] = token
    }

    return config;
},error=>{
    return Promise.reject(error);
});




// Interceptor de respuestas - maneja la renovación del token
api.interceptors.request.use(async (config) => { 
    const token = localStorage.getItem('token');
    if(!token) return config;

    const tokenStatus = isTokenNearExpiration(5);

    if(tokenStatus === null){
        handleTokenExpiration();
        return Promise.reject(new Error('Token expirado'));
    }

    if(tokenStatus !== false){

        try {
            const response = await api.post('/auth/renew',{},{
                headers:{'x-token': token}
            });

            const newToken = response.data.token;
            localStorage.setItem('token', newToken);
            config.headers['x-token'] = newToken;
        } catch (error) {
            handleTokenExpiration();
            return Promise.reject(error);            
        }

    }else{
        config.headers['x-token'] = token;
    }
    
    return config;
}, error => {
    // Rechaza la promesa con el error
    return Promise.reject(error);
});

// Interceptor de respuestas
api.interceptors.response.use(
    response => response,
    error => {
        if (error.response?.status === 401) {
            handleTokenExpiration();
        }
        return Promise.reject(error);
    }
);

export default api;