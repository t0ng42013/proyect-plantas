import { FaBox } from 'react-icons/fa6';
import style from './style/orderHeader.module.css';
import { formatSimpleDate } from '../../utils/DateFormat';
import { generateFourRandomInRange } from '../../utils/randomNumber';
import { Orders } from '../../interface/Orders';



export const OrderHeader = ({total, status, created_at}:Orders) => {
    const date = created_at;
  return (
      <div className={style['order-header']}>
          <div className={style['order-main-info']}>
              <FaBox size={46}/>
              <div>
                  <h2>Orden #{generateFourRandomInRange(1,9)}</h2>
                  <p>{formatSimpleDate(date!)} </p>
              </div>
          </div>
          <div className={style['order-status']}>
              <p className={style['order-total']}>${total}</p>
              <span className={style['status-badge']}>{status ? 'Completed' : 'Pending'}</span>
          </div>
      </div>
  )
}
