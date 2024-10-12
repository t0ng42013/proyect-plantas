import { BiCartAdd } from "react-icons/bi"
import { useDispatch } from "react-redux"
import { useAppSelector } from "../hooks/hooks";
import { toggleCart } from "../redux/cart/cartSlice";

import { IoClose } from "react-icons/io5";
import style from '../style/navbar.module.css';

export const Cart = () => {
    const  isCartHidden  = useAppSelector((state) => state.cart.hidden);
    const  cartItem  = useAppSelector((state) => state.cart.cartItems);
    const dispatch = useDispatch();

    return (
        <>
            <div >
                <div
                    className={`${style.cart} ${style.acc}`}
                    onClick={() => dispatch(toggleCart())}
                >
                    <span>{cartItem.length}</span>
                    <BiCartAdd size={32} />
                </div>

                { isCartHidden && (<CartModal  />) }
            </div>
            
        </>
    )
}



const CartModal = () => {
    const isCartItem = useAppSelector((state) => state.cart.cartItems);
    const dispatch = useDispatch();
    
    return (
        <>
            <div className={style.cartModal}>
                <h2 className={style.modalTitle}>Carros de Compras  <IoClose onClick={() => dispatch(toggleCart())} /></h2>
                <hr />

                <div className={style.modalContent}>
                    {
                    !isCartItem.length
                        ?<p>carro vacio</p>
                        :'kasjdka'
                    }
                </div>
                <button className={style.modalButton}>
                    {
                        !isCartItem.length
                        ? <a href="/plantas">Seguir Comprando</a>
                        : <a href="#">Comprar</a>
                    }
                </button>
            </div>
            <div className={style.overlay} onClick={() => dispatch(toggleCart())}></div>
        </>
    )
}