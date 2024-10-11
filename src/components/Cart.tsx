import { BiCartAdd } from "react-icons/bi"
import { useDispatch } from "react-redux"
import { useAppSelector } from "../hooks/hooks";
import { toggleCart } from "../redux/cart/cartSlice";


export const Cart = () => {
    const  isCartHidden  = useAppSelector((state) => state.cart.hidden);
    const dispatch = useDispatch();

    return (
        <>
            <div onClick={() => dispatch(toggleCart())}>
                 <BiCartAdd size={32} />
                {
                    isCartHidden 
                    ? (<CartModal  />)
                    : '' 
                }
            </div>
            
        </>
    )
}



const CartModal = () => {
    return (
        <>
            <div>olskfol</div>
            <div></div>
        </>
    )
}