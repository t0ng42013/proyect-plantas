import { Orders } from '../../interface/Orders';
import { InformacionEnvios } from './InformacionEnvios';
import { ListaProductos } from './ListaProductos';
import { OrderHeader } from './OrderHeader';
import style from './style/orders.module.css';
import { SubOrden } from './SubOrden';




export const OrderContainer = (order:Orders) => {
    return (
        <div className={style['orders-container']}>
            <div className={style['order-card']}>
                <OrderHeader {...order} ></OrderHeader>

                <div className={style['order-content']}>
                    <details className={style.suborder}>
                        <SubOrden {...order} ></SubOrden>

                        <div className={style['suborder-details']}>
                            <InformacionEnvios></InformacionEnvios>
                            <ListaProductos products={order.products}></ListaProductos>
                        </div>
                    </details>
                </div>
            </div>
        </div>
    )
}



