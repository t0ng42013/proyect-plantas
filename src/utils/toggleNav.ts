import { useEffect, useState } from "react";


export const toggleNav = ()=>{
    const [message, setMessage] = useState(false);
   
   
   useEffect(() => {
       window.scrollTo(0, 0);
       const intervalId = setInterval(() => {
           setMessage(prevMessage => !prevMessage)
       }, 3000); // Cambiar cada 3 segundos
   
       // Limpieza al desmontar el componente
       return () => clearInterval(intervalId);
   }, []);

return message
}

