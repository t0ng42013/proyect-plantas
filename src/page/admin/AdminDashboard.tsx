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
              {/* <div className={style.cardContainer}>
                <div className={style.chart} style={{ backgroundColor: "#66BB6A" }}>
                  <p className={style.cardTitle}>Daily Sales</p>
                  <p className={style.cardFooter}>55% increase in today sales</p>
                </div>
              </div>

              <div className={style.cardContainer}>
                <div className={style.chart} style={{ backgroundColor: "#FFA726" }}>
                  <p className={style.cardTitle}>Email Subscriptions</p>
                  <p className={style.cardFooter}>Last Campaign Performance</p>
                </div>
              </div>

              <div className={style.cardContainer}>
                <div className={style.chart} style={{ backgroundColor: "#EF5350" }}>
                  <p className={style.cardTitle}>Completed Tasks</p>
                  <p className={style.cardFooter}>Last Campaign Performance</p>
                </div>
              </div> */}
            </div>


          </div>

        </article>
      </section>

    </section>
  )
}
