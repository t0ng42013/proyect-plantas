import { Link, NavLink } from 'react-router-dom';
import { navItems } from '../utils/navItems';
import { useAppDispatch } from '../hooks/hooks';
import { createAccount } from '../redux/log/loginSlice';

import style from "../style/navbar.module.css"

export const MenuMobile = ({toggleMenu}:{toggleMenu:()=>void}) => {
    const dispatch = useAppDispatch();

   

    return (
        <>
            <ul className={style.linksMobile}>
                {
                    navItems.map(({ path, label }) => (
                        <li key={label} className={style.linkMobile}>
                            <NavLink onClick={toggleMenu} className={({ isActive }) => `${isActive && style.activeMobile}`} to={path}>{label}</NavLink>
                        </li>
                    ))
                }
                <hr />
                <div className={style.AccountMobile}>
                    <Link to="/login" onClick={() => dispatch(createAccount(true),toggleMenu())}>Entrar</Link>
                    <Link to="/login" onClick={() => dispatch(createAccount(false), toggleMenu())}>Register</Link>
                </div>
            </ul>


        </>
    )
}
