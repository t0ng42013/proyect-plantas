import axios, { AxiosInstance } from "axios";



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

export default api;