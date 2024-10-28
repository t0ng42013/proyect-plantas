
import style from './OrderCard.module.css';
import { Orders } from '../../interface/Orders';

export const OrderCard = ({ amount, products, status, total, created_at }: Orders) => {

    return (

        <>
            <div className={style.orderCard}>
                <div className={style.orderHeader}>
                    <div className={style.orderInfo}>
                        <div className={style.orderNumber}>Orden #{(Math.random() * 8).toPrecision(4).replace('.', '')}</div>
                        <div className={style.orderDate}>{(created_at)?.toString().split('T', 1)}</div>
                        <div className={style.orderTotal}>Total: ${total}</div>
                    </div>
                    <span className={status ? ` ${style.orderStatus} ${style.statusCompleted}` : `${style.orderStatus} ${style.statusPending}`}>{status ? 'Completed' : 'Pending'}</span>
                </div>
                {
                    products.map(i => {
                        
                        const { quantity, price, productID, name, created_at } = i;
                        return (
                            <details key={name} className={style.orderCard}>
                                <summary className={style.orderSummary}>
                                    <span>Orden #{productID} - 19 de octubre de 2024{(created_at?.toString())}</span>
                                    <span>Total: ${amount}</span>
                                </summary>
                                <div className={style.orderDetails}>
                                    <div className={style.orderDetail}>
                                        <div className={style.orderDetailTitle}>Producto</div>
                                        <div className={style.orderDetailValue}>{name}</div>
                                    </div>
                                    <div className={style.orderDetail}>
                                        <div className={style.orderDetailTitle}>Cantidad</div>
                                        <div className={style.orderDetailValue}>{quantity}</div>
                                    </div>
                                    <div className={style.orderDetail}>
                                        <div className={style.orderDetailTitle}>Precio</div>
                                        <div className={style.orderDetailValue}>${price}</div>
                                    </div>
                                </div>
                            </details>
                        )
                    })
                }

            </div>


        </>

    );
};
