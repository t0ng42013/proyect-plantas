
import { useEffect, useState } from 'react';
import { Footer, Header, Navbars } from '../container';

import style from '../style/navbar.module.css';
import styleHero from '../style/home.module.css';


export const Home = () => {
    const [message, setMessage] = useState(false);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setMessage(prevMessage => !prevMessage)
        }, 3000); // Cambiar cada 3 segundos

        // Limpieza al desmontar el componente
        console.log('desmontar el componente')
        return () => clearInterval(intervalId);
    }, []);

    return (
        <>
            <Header className={style.header}>
                <div>
                    {
                    message
                        ? <p className={`${style.slides} ${style.p1}`} >Envío gratis en compras de más de $1,500</p>
                        : <p className={`${style.slides} ${style.p2}`}>-15% en la primera compra <button className={style.buttonR}>Registrarse</button></p>
                    }
                </div>

                <Navbars></Navbars>
            </Header>
            <main>
                <div className={styleHero.hero}></div>
                <h1>body</h1>
            </main>
            <Footer />
        </>

    )
}
