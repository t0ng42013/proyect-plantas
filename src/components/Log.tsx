import { MdVerifiedUser } from 'react-icons/md'
import { FaLock, FaUser } from 'react-icons/fa';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';


import style from '../style/log.module.css'
import { ChangeEvent, useEffect, useState } from 'react';
import { login, register } from '../redux/auth/authSlice';
import { useNavigate } from 'react-router-dom';

export const Log = () => {
    const navigate = useNavigate();
    const distpath = useAppDispatch();
    const log = useAppSelector(state => state.user.log)
    const {  isLoading, error, token } = useAppSelector(state => state.auth)

    const [credential, setCredential] = useState({ name: '', password: '' })

    const handlerSubmitLogin = async (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        await distpath(login(credential));
       
    }
    const handleSubmitRegister = async (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        await distpath(register(credential));
    }


    const handlerForm = (e:ChangeEvent<HTMLFormElement>) => {
        if (log) {
            handlerSubmitLogin(e);
        } else {
            handleSubmitRegister(e);
    };
   }

    
    useEffect(() => {
        if ( token) {
            navigate('/products');
        }
    }, [ navigate, token])

    return (
        <>
            <article className={style.container}>
                <div className={style.header}>
                    <div className={style.iconCircle}>
                        <i className="user-icon"></i>
                        <MdVerifiedUser color='green' size={40} />
                    </div>
                    <hr className={style.headerLine} />
                </div>

                <div className={style.formContainer}>
                    <div className={style.loginForm}>
                        <h2>
                            {
                                log
                                    ? '¿Ya tienes una cuenta?'
                                    : `¿No tienes una cuenta?`
                            }
                        </h2>
                        <h3>{log ? 'INICIA SESIÓN' : 'REGÍSTRESE'}</h3>
                        <form onSubmit={handlerForm}>
                            <div className={style.inputGroup}>
                                <FaUser className={style.userIcon} color='white' />
                                <input
                                    type="text"
                                    placeholder="Username"
                                    value={credential.name}
                                    onChange={e => setCredential({ ...credential, name: e.target.value })}
                                    required />
                            </div>
                            <div className={style.inputGroup}>
                                <FaLock className={style.lockIcon} color='white' />
                                <input
                                    type="password"
                                    placeholder="Password"
                                    value={credential.password}
                                    onChange={e => setCredential({ ...credential, password: e.target.value })}
                                    required />
                            </div>
                            {
                                !log && (<div className={style.inputGroup}>
                                    <FaLock className={style.lockIcon} color='white' />
                                    <input type="password" placeholder="Confirm Password" required />
                                </div>)
                            }
                            {
                                log && (<label className={style.checkboxContainer}>
                                    <input type="checkbox" />
                                    <span ></span>
                                    Mantener la sesión iniciada
                                </label>)
                            }
                            {
                                <button
                                    disabled={isLoading}
                                    type="submit" className={style.submitBtn}>{isLoading ? 'Cargandoo...' : log ? 'Iniciar sesión' : 'Crear cuenta'}</button>

                            }
                            {error && <p style={{ color: 'red' }}>{error}</p>}
                        </form>
                        {
                            log && (<a href="#" className={style.forgotPassword}>¿Olvidó su contraseña?</a>)
                        }

                    </div>
                </div>
            </article>
        </>
    )
}
