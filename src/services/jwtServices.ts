import { jwtDecode } from "jwt-decode";

export interface UserData{
    id:number;
    name:string;
    role:string;
}


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