import { UserData } from "./UserData";

export interface DataState extends UserData{

    loading: boolean;
    error: null | string | undefined;
    
    
}