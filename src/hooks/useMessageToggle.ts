import { useEffect, useState } from "react";

const useMessageToggle = (interval:number) =>{
    const [message, setMessage] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
        const intervalId = setInterval(() => {
            setMessage(prevMessage => !prevMessage)
        }, interval); // Cambiar cada 3 segundos

        // Limpieza al desmontar el componente
        return () => clearInterval(intervalId);
    }, [interval]);
    return message
}

export default useMessageToggle;