
import { createAccount } from "../redux/log/loginSlice";
import { FaUserCircle } from "react-icons/fa"
import { useAppSelector } from "../hooks/hooks";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { IoLogOutOutline } from "react-icons/io5";
import { logout } from "../redux/auth/authSlice";
import { useEffect } from "react";


import style from '../style/navbar.module.css';

export const Account = () => {
  const log = useAppSelector(state => state.user.log);
  const { user } = useAppSelector(state => state.auth);
  const { token } = useAppSelector(state => state.auth);
  const dispatch = useDispatch();

  const navigation = useNavigate();
  const nav = useNavigate();

  useEffect(() => {
    if (!token) {
      // Si el token se convierte en null, redirecciona a la página de login
      nav('/');
    }
  }, [token, nav]);

  const handleBtn = () => {
    dispatch(createAccount());
    navigation('/login');
  }

  const handleLogout = () => {
    dispatch(logout());
    nav('/')
  }

  return (
    <>
      {
        !token
          ? <button onClick={handleBtn} className={`${style.acc} ${style.buttonCustom}`}><FaUserCircle size={26} />{!log ? 'Entrar' : 'Crear'}</button>
          : <details className={style.AccountUserContainer}>
            <summary>
              <FaUserCircle size={26} />
            </summary>
            <ul>
              <li>{user?.name}</li>
              <li><Link to={'/orders'}>Compras</Link></li>
              {user?.role === "Admin" && <li><Link to={'/admin'}>DashboardAdmin</Link></li>}
              <li onClick={handleLogout}> <IoLogOutOutline size={26} /> </li>
            </ul>
          </details>
      }
    </>
  )

}
