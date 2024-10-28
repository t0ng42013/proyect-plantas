import { BiHome, BiUser } from "react-icons/bi"
import { BsBox } from "react-icons/bs"
import { NavLink } from 'react-router-dom';


const menu = [
    {
        title: 'Dashboard',
        icon: <BiHome />,
        path: ''
    },
    {
        title: 'User',
        icon: <BiUser />,
        path: 'users'
    },
    {
        title: 'Products',
        icon: <BsBox />,
        path: 'products'
    },{
        title: 'Home',
        icon: <HiHome />,
        path: '/'
    }
]

import styles from '../style/menuItem.module.css';
import { HiHome } from "react-icons/hi2";

export const MenuItems = () => {
    return (
        <ul className={styles.menuItem}>
            {menu.map(({ title, icon, path }, index) => (
                <li key={index} className={styles.buttonContent}>
                    <NavLink to={path} end className={({ isActive }) => isActive ? styles.iconActive : styles.iconInactive}>
                        {icon}
                        <span className={styles.menuLabel}>
                        {title}
                        </span>
                    </NavLink>
                </li>
            ))}
        </ul>
    )
}
