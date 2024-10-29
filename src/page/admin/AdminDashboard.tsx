import { CardSmallDashboard } from './components/CardSmallDashboard'



import style from '../admin/style/dashboard.module.css'
import { CardLargeDashboard } from './components/CardLargeDashboard';
export const AdminDashboard = () => {
  return (
    <section>
      <h2>
        Dashboard
      </h2>

      <section className={style.sectionContainer}>
        <article>
          <div className={style.dashboard}>
            <div>

              <CardSmallDashboard />
            </div>
            <div>
              {/* <!-- Gráficos de ventas y suscripciones --> */}
              <CardLargeDashboard />
      
            </div>


          </div>

        </article>
      </section>

    </section>
  )
}
