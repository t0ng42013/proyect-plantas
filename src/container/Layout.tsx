import useMessageToggle from '../hooks/useMessageToggle';

import { Footer } from './Footer';
import { Header } from './Header';
import { Navbars } from './Navbars';
import { Outlet, useNavigate } from 'react-router-dom';
import { Services } from './Services';


import style from '../style/navbar.module.css';

export const Layout = () => {
const nav = useNavigate();

    const message = useMessageToggle(3000);
    return (
        <>
            <Header className={style.header}>
                <div>
                    {
                        message
                            ? <p className={`${style.slides} ${style.p1}`} >Envío gratis en compras de más de $1,500</p>
                            : <p className={`${style.slides} ${style.p2}`}>-15% en la primera compra <button 
                                                                                                    onClick={()=>nav('/login')}
                                                                                                    className={style.buttonR}>Registrarse</button></p>
                    }
                </div>
                <Navbars></Navbars>
            </Header>
            <main>
                <Outlet />
                <Services />
            </main>

            <Footer></Footer>
        </>
    )
}
