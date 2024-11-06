

export const llegados = (data,max) =>{
  const  ultimos = [...data]
   return ultimos.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
        .slice(0, max);
   
}