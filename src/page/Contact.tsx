


import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { Buttons } from "../components";

import { useScrollTo } from "../hooks/useScroll";
import { Field, Form, Formik } from 'formik';
import { contactInitialValue } from "../Formik/initialValues";
import { contactValidationSchema } from "../Formik/validationSchema";


import style from "../style/contact.module.css";
export const Contact = () => {
    useScrollTo();


const handleSubmit = (values, { resetForm }) => {
    resetForm();
}

  return (
    <section className={style['contactPageContainer']}>
          <section className={style['contact-page__form']}>
              <h4 className={style['contact-page__form-header']}>Déjanos un correo</h4>
    <Formik
    initialValues={contactInitialValue}
    validationSchema={contactValidationSchema}
    onSubmit={handleSubmit}
    >
         
              {({ errors, touched }) => (
        <Form className={style['contact-page__form-content']} action="">
                  <div className={style['contact-page__form-group']}>
                    <div>
                      <Field className={style['contact-page__form-element']} type="text" name="name" placeholder="Su nombre..." />

                              {touched.name && errors.name && <div className={style.error}>{errors.name}</div>}
                    </div>
                    <div>
                      <Field className={style['contact-page__form-element']} name="email" type="text" placeholder="Tu correo electrónico...." />

                              {touched.email && errors.email && <div  className={style.error}>{errors.email}</div>}
                    </div>
                  </div>
                        <div>
                          <Field as="textarea" className={style['contact-page__form-element']} name="message" placeholder="Tu mensaje..."></Field>
                          {touched.message && errors.message && <div className={style.error}>{errors.message}</div>}
                        </div>
                            
                  <Buttons txt="Enviar" />
              </Form>
             )}
             </Formik>
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
