import { FaCheck } from "react-icons/fa"





import style from '../style/modalBuy.module.css'
import { useAppSelector } from "../hooks/hooks"


export const ModalBuy = () => {
   const modal = useAppSelector(state => state.cart.modal)
  return (
      <div className={modal ? style.modalOpen : style.modalClose}>Producto Agregado <FaCheck color="green"  size={32}/></div>
  )
}
