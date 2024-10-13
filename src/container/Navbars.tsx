import { useEffect, useState } from "react"
import { MdMenuOpen } from "react-icons/md"
import { Account, Cart, Logo, Navbar } from "../components"
import { MenuMobile } from '../components/MenuMobile';
import { IoClose } from "react-icons/io5"

import style from "../style/navbar.module.css"

export const Navbars = () => {

    const [modal, setModal] = useState(false);
    const toggleMenu = () => { setModal((prevModal) => !prevModal) };

    useEffect(() => {
    
        const handleResize = () => {
          if( window.innerWidth >= 768 ){setModal(false)} 
        };

        window.addEventListener("resize", handleResize);

        return ()=> window.removeEventListener("resize", handleResize);
    }, [])

    return (
        <>
            <div className={style.headerNav}>
                { !modal
                    ? (<MdMenuOpen
                        onClick={toggleMenu}
                        className={style.menu}
                        size={40}
                    />)
                    : (<>
                        <IoClose
                            className={style.close}
                            onClick={toggleMenu}
                            size={32}
                        />
                        <MenuMobile />
                        <div className={style.overlay} onClick={toggleMenu}></div>
                    </>
                    )}
                <Navbar />
                <div className={style.headerSpacer}>
                    <Logo />
                </div>
                <Account />
                <Cart />
            </div>
        </>

    )
}
