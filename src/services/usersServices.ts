import { UserData } from "../interface/UserData";
import api from "./api";




export const getAllUsers = async() => {
    const response = await api.get('/user');
    return response.data;
};


export const updateUser = async(credential:UserData) => {
    const response = await api.put(`/user/${credential.id}`,credential);
    return response.data;
}

export const deleteUser = async(credential:UserData) => {
    const response = await api.delete(`/user/${credential.id}`);
    return response.data;
};