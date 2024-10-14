import { Buttons } from "../components"

import style from "../style/story.module.css";


export const Story = () => {
  return (
      <section className={style.our}>
        <span className={style.story}>Nuestra Historia</span>
          <div className={style.ourWrapper}>

              <div className={style.ourImg}>
                  <img src="./gerente-pequenas-empresas.jpg" alt="" />
              </div>
              <article className={style.ourStory}>
                  <h3>Para personas que aman las plantas</h3>
                  <p>
                      Desde hace más de una década, en un pequeño vivero
                      de barrio, comenzó nuestra pasión por el mundo
                      vegetal.
                  </p>
                  <p>
                      Todo comenzó con una humilde idea: ofrecer
                      a la comunidad no solo plantas, sino también el
                      conocimiento y la inspiración necesarios para
                      cuidar y disfrutar de ellas. Nuestra
                      misión siempre ha sido fomentar el amor por las
                      plantas y ayudar a las personas a conectar con la
                      naturaleza.
                  </p>
                  <div>
                      <Buttons txt='Leer más' />
                  </div>
              </article>
          </div>
      </section>
  )
}