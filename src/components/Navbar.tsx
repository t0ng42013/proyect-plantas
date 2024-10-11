import { NavLink } from "react-router-dom"
import { NavItem } from "../interface/NavItem";

import style from "../style/navbar.module.css";
import '../index.css'

const navItems:NavItem[] = [
    { path: '/', label: 'Home' },
    { path: '/plants', label: 'Plantas' },
    { path: '/about', label: 'Nosotros' },
    { path: '/contact', label: 'Contacto' },
];


export const Navbar = () => {
    return (
        <nav>
            <ul>
                {
                    navItems.map(({ path, label }) => (
                        <li key={label} className={``} >
                            <NavLink className={({ isActive }) => `header__nav-link ${isActive ? style.active : ''}`} to={path}>
                                {label}
                            </NavLink>
                        </li>
                    ))
                }

            </ul>
        </nav>
    )
}
