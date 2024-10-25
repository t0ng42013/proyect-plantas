import { useAppDispatch, useAppSelector } from '../hooks/hooks'
import { addToCart, removeToCart } from '../redux/cart/cartSlice';
import { Buttons } from './Buttons'

import style from '../style/cartModalItem.module.css'

export const CartModalItem = () => {
    const { cartItems, cost } = useAppSelector((state) => state.cart);
    const dispatch = useAppDispatch();

    return (
        <>
            <div className={style.containerList}>
                {
                    cartItems.map(item => {
                        const { name, price, img, stock, quantity } = item;
                        return (
                            <li key={item.id} className={style.containerProd}>
                                <div className={style.descriptionProduct}>
                                    <img width={55} src={img} alt={name} />
                                    <div className={style.descriptiondetail}>
                                        <h3>{name}</h3>
                                        <div>${price}</div>                                        
                                        <span> En stock: {stock}</span>
                                    </div>
                                </div>

                                <div className={style.quantityContainer}>
                                    <span onClick={() => dispatch(removeToCart(item))}>
                                        <Buttons txt={'-'} className={style.button} />
                                    </span>

                                    <span className={style.quantityValue}>{quantity}</span>

                                    <span onClick={() => dispatch(addToCart(item))} >
                                        <Buttons txt={'+'} className={style.button} />
                                    </span>
                                </div>
                            </li>
                        )

                    })
                }
            </div>



            <div className={style.totalContainer}>
                <hr />
                <div>SubTotal: <span>{cartItems.reduce((acc, producto) => acc + (producto.price * (producto.quantity || 0) ), 0)}</span></div>
                <div>Envio: <span>{cost}</span></div>
                <div>Total: {cartItems.reduce((acc, producto) => acc+(producto.price * (producto.quantity || 0) ),0)+cost}</div>
            </div>

        </>

    )
}
