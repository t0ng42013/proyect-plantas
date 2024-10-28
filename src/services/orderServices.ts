import { Orders } from "../interface/Orders";
import api from "./api";



export const createOrder = async (order: Orders) => {

    try {
          const response = await api.post('/orders', order);
             return response.data;
    } catch (error) {
        console.error(error);
    }
  
}


export const getAllOrder = async () => {
    try {
        const response = await api.get('/orders');
        return response.data;

    } catch (error) {
        console.error(error);
        
    }
}