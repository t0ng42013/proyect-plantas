import { jwtDecode } from "jwt-decode";
import { UserData } from "../interface/UserData";
import { showToast } from "../hooks/useConfirmationDialog";




export const decodeToken = (token:string):UserData | null =>{
    try {
       if(!token ) return null;
        const decode = jwtDecode<UserData>(token);
        return decode;
    } catch (error) {
        console.error('Error decodificando token: ' + error);
        return null;
    }
}


export const decodeTimes = (exp: number) => {
    // Obtener fecha actual en segundos
    const now = Math.floor(Date.now() / 1000);

    // Calcular tiempo restante
    const timeLeftSeconds = exp - now;
    const timeLeftMinutes = Math.floor(timeLeftSeconds / 60);
    return timeLeftMinutes;
};


// Función para verificar si el token está próximo a expirar
export const isTokenNearExpiration = (minutesThreshold = 5) => {
    const token = localStorage.getItem('token');
    if (!token) return null;

    try {
        const exp = Number(jwtDecode(token).exp);
        const timeLeft = decodeTimes(exp);
        return timeLeft <= minutesThreshold && timeLeft > 0 ? timeLeft : timeLeft <= 0 ? null : false;
    } catch (error) {
        console.error('Error decodificando token:', error);
        return null;
    }
};

// Función para manejar la expiración del token
export const handleTokenExpiration = () => {
    localStorage.removeItem('token');
    showToast('Sesión expirada, por favor inicie sesión nuevamente');
    window.location.href = '/login';
};