// import { FaCheck } from "react-icons/fa"





// import style from '../style/modalBuy.module.css'
import { useAppSelector } from "../hooks/hooks"
import { showToast } from "../hooks/useConfirmationDialog"


export const ModalBuy = () => {
   const modal = useAppSelector(state => state.cart.modal)
  return (
    <>
    {
      modal && showToast('Producto Agregado')
    }
      {/* <div className={modal ? style.modalOpen : style.modalClose}>Producto Agregado <FaCheck color="green"  size={32}/></div> */}
      
    </>

  )
}
