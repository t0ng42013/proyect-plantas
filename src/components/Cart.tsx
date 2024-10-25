import { useAppSelector } from "../hooks/hooks";
import { useDispatch } from "react-redux"
import { toggleCart } from "../redux/cart/cartSlice";
import { BiCartAdd } from "react-icons/bi"
import { IoClose } from "react-icons/io5";
import { CartModalItem } from "./CartModalItem";


import style from '../style/navbar.module.css';
import { Link } from "react-router-dom";

export const Cart = () => {
    const isCartHidden = useAppSelector((state) => state.cart.hidden);
    const cartItem = useAppSelector((state) => state.cart.cartItems);
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

                {isCartHidden && (<CartModal />)}
            </div>

        </>
    )
}



const CartModal = () => {
    const {token}= useAppSelector((state) => state.auth);
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
                            ? <p>carro vacio</p>
                            : <CartModalItem />
                    }
                </div>
                <button className={style.modalButton}>
                    {
                        !isCartItem.length
                            ? <Link
                                onClick={() => dispatch(toggleCart())}
                             to="/products"
                             >Seguir Comprando</Link>
                            : token 
                                ? <Link onClick={() => dispatch(toggleCart())}  to="/orders">Comprar</Link>
                                : <Link onClick={() => dispatch(toggleCart())}  to="/login" >Comprar</Link>
                    }
                </button>
            </div>
            <div className={style.overlay} onClick={() => dispatch(toggleCart())}></div>
        </>
    )
}