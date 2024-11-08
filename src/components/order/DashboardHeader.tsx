import style from './style/dashHeader.module.css'
import { BsClock } from 'react-icons/bs';
import { IoIosArrowUp } from 'react-icons/io';
import { Link } from 'react-router-dom';
export const DashboardHeader = () => {
  return (
      <header className={style['dashboard-header']}>
          <h1 style={{display:'flex',alignItems:'center',gap:'20px'}}><Link to={'/'}> <IoIosArrowUp style={{rotate:'-90deg', cursor:'pointer', marginTop:'5px'}} /> </Link>Mis Compras</h1>
          <div className={style['last-update']}>
              <BsClock className={style['fas fa-clock']} />
              <span>Últimas actualizaciones</span>
          </div>
      </header>
  )
}
