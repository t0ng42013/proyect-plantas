import { Link, NavLink } from 'react-router-dom';
import { navItems } from '../utils/navItems';

import style from "../style/navbar.module.css"

export const MenuMobile = ({toggleMenu}:{toggleMenu:()=>void}) => {


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
                    <Link to="/login">Entrar</Link>
                    <Link to="/register">Register</Link>
                </div>
            </ul>


        </>
    )
}
