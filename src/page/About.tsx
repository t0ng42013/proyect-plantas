
import style from '../style/about.module.css';


export const About = () => {
  return (
      <section className={style.about__content} >
          <picture>
              {/* <img src="https://images.pexels.com/photos/268261/pexels-photo-268261.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="platas" /> */}             
          </picture>
          <div className={style['about__content-story']}>
              <h3>El comienzo</h3>
              <p>
                  Desde hace más de una década, en un pequeño vivero de barrio, comenzó nuestra pasión por el mundo vegetal. Todo comenzó con una humilde idea: ofrecer a la comunidad no solo plantas, sino también el conocimiento y la inspiración necesarios para cuidar y disfrutar de ellas. Nuestra misión siempre ha sido fomentar el amor por las plantas y ayudar a las personas a conectar con la naturaleza.
              </p>

              <p>
                  Nuestra historia es una de crecimiento y dedicación. Fundado por un grupo de amigas con una profunda pasión por la botánica y la jardinería, nuestro proyecto comenzó con un simple objetivo: compartir el entusiasmo por las plantas y el arte del cultivo. Lo que comenzó como un pequeño vivero en el jardín trasero de una casa, rápidamente creció en una comunidad vibrante de jardineras aficionados y expertos.
              </p>

              <p>
                  Nos hemos esforzado por crear un espacio donde la educación sobre plantas y el amor por la jardinería se unen. Cada planta que ofrecemos está acompañada de valiosa información para ayudar a nuestros clientes a aprender y crecer. A lo largo de los años, hemos tenido el privilegio de ver cómo nuestros visitantes transforman sus espacios y vidas con las plantas que ofrecemos.
              </p>

              <p>
                  Hoy en día, Jardín de Sueños es más que un simple sitio web. Es un recurso educativo, una comunidad y una fuente de inspiración para todos los que desean cultivar un rincón verde en sus vidas. Nuestro equipo está compuesto por expertos apasionados que están siempre dispuestos a compartir sus conocimientos y responder a tus preguntas.
              </p>

              <p>
                  Queremos agradecer a cada uno de nuestros seguidores por ser parte de esta increíble jornada. Tu apoyo y amor por las plantas nos motivan a seguir adelante, a innovar y a ofrecerte lo mejor. Te invitamos a explorar nuestro sitio, aprender más sobre el mundo de las plantas y, sobre todo, disfrutar del viaje verde que hemos emprendido juntos.
              </p>

          </div>
      </section>

  )
}
