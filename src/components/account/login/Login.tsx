import { MdVerifiedUser } from 'react-icons/md'
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks'
import { login } from '../../../redux/auth/authSlice';
import { useNavigate } from 'react-router-dom';
import { Field, Form, Formik } from 'formik';
import { FaUser, FaLock } from 'react-icons/fa';
import { loginValidationSchema } from '../../../Formik/validationSchema';
import { loginInitialValue } from '../../../Formik/initialValues';




import style from '../style/account.module.css'
const Login = () => {
    const { error, isLoading, } = useAppSelector(state => state.auth)
    const dispatch = useAppDispatch();
    const navigate = useNavigate();


    const handleSubmit = (values:{nameOrEmail:string, password:string}) => {
        const credential = {...values,
            email: values.nameOrEmail,
            name: values.nameOrEmail
        }
        dispatch(login(credential)).then((result) => {
                    if (!result.type.includes('reject')) {
                        navigate('/products');
                    } else {
                        console.error("Error en la autenticación:", error);
                    }
                });
    }

    return (
        <article className={style.container}>
            <div className={style.header}>
                <div className={style.iconCircle}>
                    <MdVerifiedUser color='green' size={40} />
                </div>
                <hr className={style.headerLine} />
            </div>

            <div className={style.formContainer}>
                <div className={style.loginForm}>
                    <h2>¿Ya tienes una cuenta?</h2>
                    <h3>INICIA SESIÓN</h3>
                    <Formik
                        initialValues={loginInitialValue}
                        validationSchema={loginValidationSchema}
                        onSubmit={handleSubmit}>

                        {({ errors, touched }) => (
                            <Form >
                                <div className={style.inputGroup}>
                                    <FaUser className={style.userIcon} color='white' />
                                    <Field
                                        className={`${style.inputGroup} ${errors.nameOrEmail && style.borderError } `}
                                        name="nameOrEmail"
                                        placeholder="Usuario o Email"
                                        type="text"
                                        autocomplete="off"
                                    />
                                    {touched.nameOrEmail && errors.nameOrEmail && <div className={style.error}>{errors.nameOrEmail}</div>}
                                </div>

                                <div className={style.inputGroup}>
                                    <FaLock className={style.lockIcon} color='white' />
                                    <Field
                                        className={`${style.inputGroup} ${touched.password && style.borderError} `}
                                        name="password"
                                        type="password"
                                        autocomplete="off"
                                        placeholder="Password"
                                    />
                                    {touched.password && errors.password && <div className={style.error}>{errors.password}</div>}
                                </div>

                                <label className={style.checkboxContainer}>
                                    <Field name="check" type="checkbox" />
                                    <span >Mantener la sesión iniciada</span>
                                </label>

                                <button
                                    disabled={isLoading}
                                    type="submit" className={style.submitBtn}>
                                    {isLoading ? 'Cargando...' : 'Iniciar sesión'}
                                </button>

                                {error && <p style={{ color: 'red' }}>{error && 'El valor ingresado no es válido.'}</p>}
                            </Form>
                        )}
                    </Formik>


                    <a href="#" className={style.forgotPassword}>¿Olvidó su contraseña?</a>

                </div>
            </div>
        </article>

    )
}

export default Login; 