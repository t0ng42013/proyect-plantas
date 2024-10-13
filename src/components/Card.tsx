import { Buttons } from './Buttons';


import style from '../style/card.module.css';


export const Card = () => {
    return (
        <article className={style.productCard}>
            <figure className={style.productImg}>
                <img src="https://static.wixstatic.com/media/c837a6_2ec4d5d6e54e4e8bb975fb947cf144f8~mv2.png/v1/fill/w_283,h_377,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c837a6_2ec4d5d6e54e4e8bb975fb947cf144f8~mv2.png" alt="" />
                <span className={style.badge}>Récien llegado</span>
            </figure>
            <div className={style.productInfo}>
                <h2 className={style.productName}>Nombre</h2>
                <p className={style.productPrice}>price</p>
                <Buttons className={style.addToCart} txt='Agregar al carrito' />
            </div>
        </article>
    )
}
