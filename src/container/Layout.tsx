import useMessageToggle from '../hooks/useMessageToggle';
import { lazy } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Header } from './Header';
import { Navbars } from './Navbars';
import { SuspenseWrapper } from '../components/SuspenseWrapper';



import style from '../style/navbar.module.css';

const Footer = lazy(() => import('../container/Footer')); 
const Services = lazy(() => import('../container/Services'));

export const Layout = () => {
const nav = useNavigate();

    const message = useMessageToggle(3000);
    return (
        <>
            <Header className={style.header}>
                <div>
                    {
                        message
                            ? <p className={`${style.slides} ${style.p1}`} >Envío gratis en compras de más de $10,000</p>
                            : <p className={`${style.slides} ${style.p2}`}>-15% en la primera compra <button 
                                                                                                    onClick={()=>nav('/login')}
                                                                                                    className={style.buttonR}>Registrarse</button></p>
                    }
                </div>
                <Navbars></Navbars>
            </Header>
            <main>
                <Outlet />
                <SuspenseWrapper Component={Services } />
                   
                
            </main>

        
                <SuspenseWrapper Component={Footer}/>
        </>
    )
}
