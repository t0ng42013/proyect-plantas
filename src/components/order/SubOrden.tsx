

import { FaBoxOpen, FaChevronDown } from 'react-icons/fa';
import style from './style/subOrden.module.css';
import { Orders } from '../../interface/Orders';
import { formatLongDate } from '../../utils/DateFormat';

export const SubOrden = ({id,created_at,products}:Orders) => {
    const subtotal = products.reduce((acc, product) => {
        return acc + (product.price * product.quantity);
    }, 0);


const date = created_at
  return (
      <summary className={style['suborder-header']}>
          <div className={style['suborder-title']}>
              <FaBoxOpen />
              <span>Suborden # {id}</span>
          </div>
          <div className={style['suborder-info']}>
              <span>{formatLongDate(date!)}</span>
              <span className={style['suborder-total']}>${subtotal}.00</span>
              <FaChevronDown />
          </div>
      </summary>
  )
}
