import { MdMenuOpen } from "react-icons/md"
import { Account, Cart, Logo, Navbar } from "../components"

import style from "../style/navbar.module.css"
import { IoClose } from "react-icons/io5"
import { useState } from "react"
import { MenuMobile } from '../components/MenuMobile';

export const Navbars = () => {

    const [modal, setModal] = useState(false);
    const toggleMenu = () => { setModal((prevModal) => !prevModal) }

    return (
        <>
            <div className={style.headerNav}>
                {modal
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
