import axios from "axios";
import { ILoginCred } from '../interface/LoginCredential';
import api from "./api";



export const loginUser = async (credential: ILoginCred) => {

    try {
        const response = await api.post('/auth/login', credential);
        if (response.data.token) {
            localStorage.setItem('token', response.data.token);
        }
        return response.data;

    } catch (error) {
        if (axios.isAxiosError(error)) {
            if (error.response) {
                const errorMessages = error.response.data.err[0].msg;
                console.warn('Error:', errorMessages);
                return Promise.reject({ message: `Errores: ${errorMessages}` }); // Usar un objeto con un mensaje
            } else if (error.request) {
                return Promise.reject({ message: 'No se recibió respuesta del servidor' });
            } else {
                return Promise.reject({ message: 'Error en la solicitud: ' + error.message });
            }
        } else {
            return Promise.reject({ message: 'Error desconocido' });
        }
    }
};


export const registerUser = async (credential: ILoginCred) => {
    try {
        const response = await api.post('/auth/register', credential);
        
        if (response.data.token) {
            localStorage.setItem('token', response.data.token);
        }
        return response.data;
    } catch (error) {
       if (axios.isAxiosError(error) && error.response) {
           return Promise.reject({ message: error.response.data.msg });
       } else {
           return Promise.reject({ message: 'Error desconocido' });
       }

       
    }
};


