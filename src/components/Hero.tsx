import 'animate.css';

import style from '../style/home.module.css'


export const Hero = () => {
    return (
        <section className={style.hero}>
            <figure><img className={style.heroImg} src="fondoHero.webp" alt="bg" /></figure>

            <span className={`${style.heroWelcome} animate__animated animate__backInUp `}>
                Bienvenidos a Jardín de Sueños
            </span>
            <h2 className={`${style.heroTitle} animate__animated animate__backInUp `}>Transforma Tu Espacio con Vida Verde</h2>

        </section>
    )
}
