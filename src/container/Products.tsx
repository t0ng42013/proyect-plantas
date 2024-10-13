import 'animate.css'

import { Buttons, Card } from '../components';

import style from '../style/home.module.css'
import '../index.css'

export const Products = () => {
  return (
      <section className={style.newProduct}>
          <div className={style.newProductTitle}>
              <h2 className={`animate__animated animate__fadeInLeft`}>Plantas Nuevas</h2>
              <Buttons
                className='animate__animated animate__fadeInLeft '
                txt='Comprar'
              />
              {/* <button className={`animate__animated animate__fadeInRight`}>Comprar</button> */}
          </div>
          <div className={style.newProductGrid}>
                <Card />
                <Card />
                <Card />
                <Card />
          </div>

      </section>
  )
}
