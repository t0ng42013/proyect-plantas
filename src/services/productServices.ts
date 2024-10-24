import { Productos } from "../interface/Productos";
import api from "./api";



export const getProduct = async():Promise<Productos[]> =>{
    const response = await api.get('/product');
    return response.data;

}