import { IComments } from "../interface/Comment";
import api from "./api";


export const getAllComments = async() =>{
    const comments = await api.get('/comments');
    return comments.data;
}

export const createComment = async (credential:IComments) => {
    const comments = await api.post(`/comments`,credential);
    return comments.data;
}

export const updateComment = async(credential:IComments) =>{
    const comments = await api.put(`/comments/${credential.id}`,credential);
    return comments.data;
}

export const deleteComment = async(credential:IComments) =>{
    const comments = await api.delete(`/comments/${credential.id}`);
    return comments.data;
}