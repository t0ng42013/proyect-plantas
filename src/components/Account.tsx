import { FaUserCircle } from "react-icons/fa"

import style from '../style/navbar.module.css';

export const Account = () => {
  return (
    <button className={`${style.acc} ${style.buttonCustom}`}>
      <FaUserCircle size={26} />
      Entrar
    </button>
  )
}
