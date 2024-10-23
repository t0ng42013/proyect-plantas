import { NavLink } from "react-router-dom"
import { navItems } from "../utils/navItems";


import styles from "../style/navbar.module.css";



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
