


import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { Buttons } from "../components";

import style from "../style/contact.module.css";
import { useScrollTo } from "../hooks/useScroll";


export const Contact = () => {
    useScrollTo();
  return (
    <section className={style['contactPageContainer']}>
          <section className={style['contact-page__form']}>
              <h4 className={style['contact-page__form-header']}>Déjanos un correo</h4>

              <form className={style['contact-page__form-content']} action="">
                  <div className={style['contact-page__form-group']}>
                      <input className={style['contact-page__form-element']} type="text" placeholder="Su nombre..." />
                      <input className={style['contact-page__form-element']} type="text" placeholder="Tu correo electrónico...." />
                  </div>

                  <textarea className={style['contact-page__form-element']} placeholder="Tu mensaje..."></textarea>
                  <Buttons txt="Enviar" />
              </form>
          </section>

          <section className={style['contact-page__info']}>
              <h4 className={style['contact-page__info-header']}>Información y detalles de la dirección</h4>

              <div className={style['contact-page__info-details']}>
                  <p className={style['contact-page__info-detail']}>+45 (011) 123 45678</p>
                  <p className={style['contact-page__info-detail']}>Lunes-domingo :<span>09:00 - 20:00</span></p>
                  <p className={style['contact-page__info-detail']}>Correo electrónico :<span> <a href="mailto:support@gmail.com" >support@gmail.com</a></span></p>
              </div>

              <div className={style['contact-page__info-social']}>
                  <a href="/"><FaFacebook className={style['contact-page__info-social-icon']} size={24} /></a>
                  <a href="/"><FaInstagram className={style['contact-page__info-social-icon']} size={24} /></a>
                  <a href="/"><FaTwitter className={style['contact-page__info-social-icon']} size={24} /></a>
                  <a href="/"><FaYoutube className={style['contact-page__info-social-icon']} size={24} /></a>
              </div>
          </section>

          <section className={style['contact-page__section']}>
              {/* Puedes agregar contenido adicional aquí */}
          </section>
    </section>
  )
}
