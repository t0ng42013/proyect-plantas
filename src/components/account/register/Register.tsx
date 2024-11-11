import { MdVerifiedUser, MdEmail } from 'react-icons/md';
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";
import {  register } from "../../../redux/auth/authSlice";
import { Field, Form, Formik } from "formik";
import { registerInitialValue } from "../../../Formik/initialValues";
import { FaLock, FaUser } from "react-icons/fa";
import { registerValidationSchema } from '../../../Formik/validationSchema';
import { useNavigate } from 'react-router-dom';



import style from '../style/account.module.css'
export const Register = () => {
    const { error, isLoading, } = useAppSelector(state => state.auth)
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handleSubmit = (values: {name:string ,email:string,password:string}) => {
        dispatch(register(values)).then((result) => {
            if (!result.type.includes('rejected')) {
                navigate('/products');
            } else {
                console.error("Error en la autenticación:", error);
            }
        });
    };

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
                    <h2>¿No tienes una cuenta?</h2>
                    <h3>REGÍSTRESE</h3>
                    <Formik
                        initialValues={registerInitialValue}
                        validationSchema={registerValidationSchema}
                        onSubmit={handleSubmit}>
                        {({ errors, touched }) => (
                            <Form>
                                <div className={style.inputGroup}>
                                    <FaUser className={style.userIcon} color='white' />
                                    <Field
                                        className={`${style.inputGroup} ${errors.name && style.borderError} `}
                                        name="name"
                                        placeholder="Usuario..."
                                        type="text"
                                    />
                                    {touched.name && errors.name && <div className={style.error}>{errors.name}</div>}
                                </div>

                                <div className={style.inputGroup}>
                                    <MdEmail className={style.userIcon} color='white' />
                                    <Field
                                        className={`${style.inputGroup} ${errors.email && style.borderError} `}
                                        name="email"
                                        placeholder="Email..."
                                        type="email"
                                    />
                                    {touched.email && errors.email && <div className={style.error}>{errors.email}</div>}
                                </div>

                                <div className={style.inputGroup}>
                                    <FaLock className={style.lockIcon} color='white' />
                                    <Field
                                        className={`${style.inputGroup} ${errors.password && style.borderError} `}
                                        name="password"
                                        type="password"
                                        placeholder="Contraseña..."
                                    />
                                    {touched.password && errors.password && <div className={style.error}>{errors.password}</div>}
                                </div>

                                <div className={style.inputGroup}>
                                    <FaLock className={style.lockIcon} color='white' />
                                    <Field
                                        className={`${style.inputGroup} ${errors.confirmPassword && style.borderError} `}
                                        name="confirmPassword"
                                        type="password"
                                        placeholder="Confirmar contraseña..."
                                    />
                                    {touched.confirmPassword && errors.confirmPassword && <div className={style.error}>{errors.confirmPassword}</div>}
                                </div>

                                <button
                                    disabled={isLoading}
                                    type="submit" className={style.submitBtn}>
                                    {isLoading ? 'Cargandoo...' : 'Crear cuenta'}
                                </button>
                                
                                {error && <p style={{ color: 'red' }}>{error !== 'Errores: Invalid value' ? error.replace('Errores:', '') : 'El valor ingresado no es válido.'}</p>}
                            </Form>
                        )}
                    </Formik>



                </div>
            </div>
        </article>
    )
}
