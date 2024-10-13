import { NavLink } from 'react-router-dom';
import { navItems } from '../utils/navItems';

import style from "../style/navbar.module.css"

export const MenuMobile = () => {
    return (
        <>
            <ul className={style.linksMobile}>
                {
                    navItems.map(({ path, label }) => (
                        <li key={label} className={style.linkMobile}>
                            <NavLink className={({ isActive }) => `${isActive && style.activeMobile}`} to={path}>{label}</NavLink>
                        </li>
                    ))
                }
                <hr />
                <div className={style.AccountMobile}>
                    <a href="/">Entrar</a>
                    <a href="/">Register</a>
                </div>
            </ul>


        </>
    )
}
