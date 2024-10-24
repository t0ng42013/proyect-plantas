import { useAppDispatch } from '../hooks/hooks';
import { addToCart, toggleModal } from '../redux/cart/cartSlice';
import { Productos } from '../interface/Productos';
import { Buttons } from './Buttons';


interface Card{
   item:Productos;
   dark?:boolean; 
}


import style from '../style/card.module.css';

export const Card = ({item, dark}:Card) => {
    const dispatch = useAppDispatch();
    const handleCart = ()=>{
        dispatch(addToCart(item));
        dispatch(toggleModal());
        setTimeout(() => {
            dispatch(toggleModal());
        }, 2000);

    }

    return (
        <article className={style.productCard}>
            <figure className={style.productImg}>
                <img src="https://static.wixstatic.com/media/c837a6_2ec4d5d6e54e4e8bb975fb947cf144f8~mv2.png/v1/fill/w_283,h_377,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c837a6_2ec4d5d6e54e4e8bb975fb947cf144f8~mv2.png" alt="" />
                {!dark && <span className={style.badge}>Récien llegado</span>}
            </figure>
            <div className={style.productInfo}>
                <h2 className={`${!dark ? style.productName : style.productNameLight}`}>{item.name}</h2>
                <p className={`${!dark ? style.productPrice : style.productNameLight}`}>{item.price}</p>
                <Buttons
                    disabled={item.stock === 0}
                    onClick={handleCart}
                    className={`${!dark ? style.addToCart : style.addToCartLight} `}
                    txt='Agregar al carrito' 
                    />
            </div>
        </article>
    )
}
