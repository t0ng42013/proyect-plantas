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
            // Aquí manejas errores específicos de Axios
            if (error.response) {
                // El servidor respondió con un código de estado fuera del rango 2xx
                console.warn('Error:', error.response.data.message || error.response.data);
                return error.response.data.message || 'Error desconocido en el login';
            } else if (error.request) {
                // La solicitud fue hecha pero no hubo respuesta
                console.warn('No se recibió respuesta del servidor');
                return 'No se recibió respuesta del servidor';
            } else {
                // Algo pasó al configurar la solicitud
                console.warn('Error en la solicitud:', error.message);
                return 'Error en la solicitud: ' + error.message;
            }
        } else {
            // Error no relacionado con Axios
            console.warn('Error desconocido:', error);
            return 'Error desconocido';
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
        if (axios.isAxiosError(error)) {
            // Aquí manejas errores específicos de Axios
            if (error.response) {
                // El servidor respondió con un código de estado fuera del rango 2xx
                console.warn('Error:', error.response.data.message || error.response.data);
                return error.response.data.message || 'Error desconocido en el login';
            } else if (error.request) {
                // La solicitud fue hecha pero no hubo respuesta
                console.warn('No se recibió respuesta del servidor');
                return 'No se recibió respuesta del servidor';
            } else {
                // Algo pasó al configurar la solicitud
                console.warn('Error en la solicitud:', error.message);
                return 'Error en la solicitud: ' + error.message;
            }
        } else {
            // Error no relacionado con Axios
            console.warn('Error desconocido:', error);
            return 'Error desconocido';

        }
    }
};


