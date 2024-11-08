import { useAppDispatch } from '../hooks/hooks';
import { addToCart, toggleModal } from '../redux/cart/cartSlice';
import { Productos } from '../interface/Productos';
import { Buttons } from './Buttons';


interface Card{
   item:Productos;
   dark?:boolean; 
}


import style from '../style/card.module.css';
import { useState } from 'react';

export const Card = ({item, dark}:Card) => {
    const dispatch = useAppDispatch();
   
    const handleCart = ()=>{
        dispatch(addToCart(item));
        dispatch(toggleModal());
        setTimeout(() => {
            dispatch(toggleModal());
        }, 2000);

    }
    const [isHovered, setIsHovered] = useState(false);
    return (
        <article className={style.productCard}>
            <figure className={style.productImg} onMouseOver={() => setIsHovered(!isHovered)}>
                
                {isHovered ? <img src={item.imgHover} alt={item.name} loading='lazy'/> : <img src={item.img} alt={item.name}  loading='lazy'/> }
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
