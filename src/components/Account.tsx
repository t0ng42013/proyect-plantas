
import { createAccount } from "../redux/log/loginSlice";
import { FaUserCircle } from "react-icons/fa"
import { useAppSelector } from "../hooks/hooks";
import { useDispatch } from "react-redux";


import style from '../style/navbar.module.css';
import {  useNavigate } from "react-router-dom";
import { IoLogOutOutline } from "react-icons/io5";
import { logout } from "../redux/auth/authSlice";
import { useEffect } from "react";

export const Account = () => {
  const log = useAppSelector(state => state.user.log);
  const {token} = useAppSelector(state => state.auth);
  const dispatch = useDispatch();
  
  const navigation = useNavigate();  
  const nav=useNavigate();

  useEffect(() => {
    if (!token) {
      // Si el token se convierte en null, redirecciona a la página de login
      nav('/');
    }
  }, [token, nav]);

  const handleBtn =()=>{
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
      ?  <button onClick={handleBtn} className={`${style.acc} ${style.buttonCustom}`}><FaUserCircle size={26} />{!log ?'Entrar' : 'Crear'}</button>
      : <button onClick={handleLogout} className={`${style.acc} ${style.buttonCustom}`} > <IoLogOutOutline  size={26}/> Salir</button> 
    }
    </>
  )

}
