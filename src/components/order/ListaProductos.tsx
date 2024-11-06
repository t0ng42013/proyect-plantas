import { FaBox } from 'react-icons/fa6';
import style from './style/ListaProductos.module.css';
import { ProductOrders } from '../../interface/Orders';

interface ListaProductosProps {
    products: ProductOrders[];  // Asumiendo que ProductOrders es tu tipo para los productos
}

export const ListaProductos: React.FC<ListaProductosProps> = ({products}) => {
   return (
    <>
      {
      products.map(({ name, quantity, price }:ProductOrders, index:number) => (
        <div key={`${name}-${index}`} className={style['products-list']}>
          <div className={style['section-header']}>
            <FaBox />
            <h3>Productos</h3>
          </div>
          <div className={style['product-items']}>
            <div className={style['product-item']}>
              <div className={style['product-info']}>
                <p className={style['product-name']}>Producto {name}</p>
                <p className={style['product-quantity']}>Cantidad: {quantity}</p>
              </div>
              <p className={style['product-price']}>${price}.00</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
