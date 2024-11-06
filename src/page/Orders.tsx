
import { DashboardHeader } from '../components/order/DashboardHeader';
import { OrderContainer } from '../components/order/OrderContainer';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';

import style from '../components/order/style/orders.module.css';
import { getAllOrderData } from '../redux/orders/orderSlice';
import { useEffect } from 'react';





export const Orders = () => {
    const { orders, isLoading, error } = useAppSelector(state => state.order);
    const dispatch = useAppDispatch();


    useEffect(() => {
        dispatch(getAllOrderData());
    }, [dispatch])
  return (
      <div className={style.dashboard}>

         <DashboardHeader></DashboardHeader>
          {error && <div className="error">{error}</div>}
          {isLoading && <div className="loading">Loading...</div>}
          {Array.isArray(orders) && orders.map((order) => (
              <OrderContainer key={order.id} {...order} />
          ))}
      
      </div>
  )
}
