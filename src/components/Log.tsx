import { MdVerifiedUser } from 'react-icons/md'
import { FaLock, FaUser } from 'react-icons/fa';
import { useAppSelector } from '../hooks/hooks';


import style from '../style/log.module.css'

export const Log = () => {
   
    const log = useAppSelector(state => state.user.log)

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
                                  ?'¿Ya tienes una cuenta?'
                                  :`¿No tienes una cuenta?`
                        }
                        </h2>
                      <h3>{log ? 'INICIA SESIÓN' : 'REGÍSTRESE'}</h3>
                      <form>
                          <div className={style.inputGroup}>
                              <FaUser className={style.userIcon} color='white' />
                              <input type="text" placeholder="Username" required />
                          </div>
                          <div className={style.inputGroup}>
                              <FaLock className={style.lockIcon} color='white' />                              
                              <input type="password" placeholder="Password" required/>
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
                              <button type="submit" className={style.submitBtn}>{log?'Iniciar sesión':'Crear cuenta'}</button>
                            
                          }
                      </form>
                      {
                        log &&( <a href="#" className={style.forgotPassword}>¿Olvidó su contraseña?</a>)
                      }
                     
                  </div>
                </div>
        </article>
    </>
  )
}
