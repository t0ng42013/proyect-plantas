import style from './style/dashHeader.module.css'
export const DashboardHeader = () => {
  return (
      <header className={style['dashboard-header']}>
          <h1>Mis Compras</h1>
          <div className={style['last-update']}>
              <i className={style['fas fa-clock']}></i>
              <span>Últimas actualizaciones</span>
          </div>
      </header>
  )
}
