import { Productos } from "../interface/Productos";


export const llegados = (data:Productos[]) =>{
  const  ultimos = [...data]
   return ultimos.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
        .slice(0, 4);
   
}