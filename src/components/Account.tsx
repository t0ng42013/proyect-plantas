
import { createAccount } from "../redux/log/loginSlice";
import { FaUserCircle } from "react-icons/fa"
import { useAppSelector } from "../hooks/hooks";
import { useDispatch } from "react-redux";


import style from '../style/navbar.module.css';
import {  useNavigate } from "react-router-dom";

export const Account = () => {
  const log = useAppSelector(state => state.user.log);
  const dispatch = useDispatch();
  
  const navigation = useNavigate();
  

  const handleBtn =()=>{
    dispatch(createAccount());
    navigation('/login');
  }

  return (
    <button 
    onClick={handleBtn}
    className={`${style.acc} ${style.buttonCustom}`}>
      <FaUserCircle size={26} />
      {!log ?'Entrar' : 'Crear'}
    </button>
  )
}
