import { NavLink } from "react-router-dom"
import { NavItem } from "../interface/NavItem";

import styles from "../style/navbar.module.css";

export const navItems:NavItem[] = [
    { path: '/', label: 'Home' },
    { path: '/plants', label: 'Plantas' },
    { path: '/about', label: 'Nosotros' },
    { path: '/contact', label: 'Contacto' },
];


export const Navbar = () => {
    return (
        <nav>
            <ul className={styles.links}>
                {
                    navItems.map(({ path, label }) => (
                        <li key={label}  >
                            <NavLink className={({ isActive }) => ` ${isActive ? styles.active : ''}`} to={path}>
                                {label}
                            </NavLink>
                        </li>
                    ))
                }

            </ul>
        </nav>
    )
}
