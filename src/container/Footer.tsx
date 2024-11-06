
import { FaFacebook, FaInstagram, FaTwitch } from 'react-icons/fa'
import { Buttons } from '../components'
import { navItems } from '../utils/navItems';
import { NavLink } from 'react-router-dom';
import { Field, Form, Formik, } from 'formik';
import { footInitialValue } from '../Formik/initialValues';


import styleNav from '../style/navbar.module.css'
import style from '../style/footer.module.css'
import { footvalidationSchema } from '../Formik/validationSchema';
import Swal from 'sweetalert2';
export const Footer = () => {

  const handleSubmit = (values: { email: string }, { resetForm }) => {
    Swal.fire({
      title: '¡Gracias por suscribirte!',
      text: 'Recibirás todas las novedades en tu correo electrónico',
      icon: 'success',
      confirmButtonText: 'Aceptar'      
    }).then(() => {
      resetForm(); // Esto limpiará los valores del formulario
    });
    
  }

  return (
    
    <footer className={style.footer}>
      <div className={style['footer__container-nav']}>
        <ul>
          {navItems.map(({path,label})=>(
            <NavLink key={label} className={({isActive})=>`${isActive?styleNav.active:''}`} to={path}>{label}</NavLink>
          ))}
        </ul>
      </div>
      <Formik
       initialValues={footInitialValue}
        validationSchema={footvalidationSchema}
        onSubmit={handleSubmit} 
      >
        
     {({errors,touched})=>(
      <Form className={style.footer__form} action="">
        <h3>Suscríbete a nuestro boletín</h3>
        <Field
          name="email"
          type="email"
              className={`${style.footerInput} ${errors.email && style.foortBorError}`}
          placeholder='Su dirección de correo electrónico...' />
            {touched.email && errors.email && <div className={style.error}>{errors.email}</div>}
        <Buttons txt='Suscribirse' className={style.footerBtn} />
        <div>
          <a href=""> <FaFacebook size={18} color='white' /> </a>
          <a href=""> <FaInstagram size={18} color='white' /> </a>
          <a href=""> <FaTwitch size={18} color='white' /> </a>
        </div>
      </Form>
      )}
      </Formik>
      <hr className={style.hr} />
      <div className={style.copy}>
        &copy; 2024 Jardín de Sueños. Desarrollado por Gastón Alonso
      </div>
    </footer>
  )
}
