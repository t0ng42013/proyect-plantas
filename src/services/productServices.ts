import { Productos } from "../interface/Productos";
import api from "./api";


export const getProduct = async():Promise<Productos[]> =>{
    const response = await api.get('/product');
    return response.data;

}

export const createProductSrv = async(credentials:Productos):Promise<Productos[]> =>{
         const response = await api.post('/product' ,credentials);
        return response.data;
}

export const updateProductSrv = async(credentials:Productos):Promise<Productos[]> =>{
    const response = await api.put(`/product/${credentials.id}`,credentials);
    return response.data;
}

export const deleteProductSrv = async (credentials: Productos):Promise<Productos[]> =>{
    const response = await api.delete(`/product/${credentials.id}`);
    return response.data;
}