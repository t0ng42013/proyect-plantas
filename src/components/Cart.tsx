import { useAppDispatch } from "../hooks/hooks";
import { useAppSelector } from "../hooks/hooks";
import { toggleCart } from "../redux/cart/cartSlice";
import { BiCartAdd } from "react-icons/bi"
import { CartModal } from "./CartModal";


import style from '../style/navbar.module.css';

export const Cart = () => {
    const isCartHidden = useAppSelector((state) => state.cart.hidden);
    const cartItem = useAppSelector((state) => state.cart.cartItems);
    const dispatch = useAppDispatch();

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



