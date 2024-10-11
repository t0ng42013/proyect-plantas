
import { useEffect, useState } from 'react';
import { Cart, Logo, Navbar, Account } from '../components';
import { Footer, Header } from '../container';

import style from '../style/navbar.module.css'

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
                <div id='probando'>
                   {message  
                        ? <p className={`${style.invento} ${style.p1}`} >Envío gratis en compras de más de $1,500</p>
                        : <p className={`${style.invento} ${style.p2}`}>-15% en la primera compra
                            <button>Registrarse</button></p>
                   
                   }
                    
                </div>
                <Logo />

                <div>
                 <Navbar />
                </div>

                <Cart />
                <Account />
            </Header>
                <main>
                    <h1>body</h1>
                </main>
            <Footer />
        </>

    )
}
