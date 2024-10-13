
import { useEffect, useState } from 'react';
import { Blog, Comments, Footer, Header, Navbars, Products, Services, Story } from '../container';
import { Hero } from '../components/Hero';

import style from '../style/navbar.module.css';

export const Home = () => {
    const [message, setMessage] = useState(false);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setMessage(prevMessage => !prevMessage)
        }, 3000); // Cambiar cada 3 segundos

        // Limpieza al desmontar el componente
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
                <Hero />
                <Products />
                <Story />
                <Comments />
                <Blog />
                <Services />

            </main>
            <Footer />
        </>

    )
}
