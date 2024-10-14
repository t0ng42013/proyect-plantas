import { useAppDispatch, useAppSelector } from '../hooks/hooks'
import { addToCart, removeToCart } from '../redux/cart/cartSlice';
import { Buttons } from './Buttons'

import style from '../style/cartModalItem.module.css'

export const CartModalItem = () => {
    const cartItem = useAppSelector((state) => state.cart.cartItems);
    const dispatch = useAppDispatch();
    

    return (
        <>
        <div className={style.containerList}>
            {
            cartItem.map(item => {
                const { nombre, precio, img, cantidad,} = item;
                return(
                    <li key={item.id} className={style.containerProd}>
                        <div className={style.descriptionProduct}>
                            <img width={55} src={img} alt={nombre} />
                            <div>
                                <h3>{nombre}</h3>
                                <span>{precio}</span>
                            </div>
                        </div>

                        <div className={style.quantityContainer}>
                            <span onClick={() => dispatch(addToCart(item))} >
                                <Buttons txt={'+'} className={style.button} /></span>
                            <span>{cantidad}</span>
                            <span onClick={() => dispatch(removeToCart(item))}>
                                <Buttons txt={'-'} className={style.button} />
                            </span>
                        </div>
                    </li>
                )
               
            })
        }
        </div>
        
        

        <div className={style.totalContainer}>
        <hr />
        <div>SubTotal: <span>52314321</span></div>
        <div>Envio: <span>545</span></div>
        <div>Total: 343</div>
        </div>
        
        </>
        
    )
}
