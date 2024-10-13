import 'animate.css';

import style from '../style/home.module.css'


export const Hero = () => {
    return (
        <section className={style.hero}>
            <figure><img className={style.heroImg} src="https://static.wixstatic.com/media/c837a6_a5d0bc62a83e4ebab069c11b7e15e25a~mv2.jpg/v1/fill/w_980,h_1100,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c837a6_a5d0bc62a83e4ebab069c11b7e15e25a~mv2.jpg" alt="" /></figure>

            <span className={`${style.heroWelcome} animate__animated animate__backInUp `}>
                Bienvenidos a Jardín de Sueños
            </span>
            <h2 className={`${style.heroTitle} animate__animated animate__backInUp `}>Transforma Tu Espacio con Vida Verde</h2>

        </section>
    )
}
