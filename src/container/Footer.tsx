
import { FaFacebook, FaInstagram, FaTwitch } from 'react-icons/fa'
import { Buttons } from '../components'
import { navItems } from '../utils/navItems';
import { NavLink } from 'react-router-dom';


import styleNav from '../style/navbar.module.css'
import style from '../style/footer.module.css'
export const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style['footer__container-nav']}>
        <ul>
          {navItems.map(({path,label})=>(
            <NavLink key={label} className={({isActive})=>`${isActive?styleNav.active:''}`} to={path}>{label}</NavLink>
          ))}
        </ul>
      </div>
      <form className={style.footer__form} action="">
        <h3>Suscríbete a nuestro boletín</h3>
        <input
          type="text"
          className={style.footerInput}
          placeholder='Su dirección de correo electrónico...' />
        <Buttons txt='Suscribirse' className={style.footerBtn} />
        <div>
          <a href=""> <FaFacebook size={18} color='white' /> </a>
          <a href=""> <FaInstagram size={18} color='white' /> </a>
          <a href=""> <FaTwitch size={18} color='white' /> </a>
        </div>
      </form>
      <hr className={style.hr} />
      <div className={style.copy}>
        &copy; 2024 Jardín de Sueños. Desarrollado por Gastón Alonso
      </div>
    </footer>
  )
}
