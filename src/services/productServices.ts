import { Productos } from "../interface/Productos";
import api from "./api";


export const getProduct = async():Promise<Productos[]> =>{
    const response = await api.get('/products');
    return response.data;

}

export const createProductSrv = async(credentials:Productos):Promise<Productos[]> =>{
         const response = await api.post('/products' ,credentials);
        return response.data;
}

export const updateProductSrv = async(credentials:Productos):Promise<Productos[]> =>{
    const response = await api.put(`/products/${credentials.id}`,credentials);
    return response.data;
}

export const deleteProductSrv = async (credentials: Productos):Promise<Productos[]> =>{
    const response = await api.delete(`/products/${credentials.id}`);
    return response.data;
}