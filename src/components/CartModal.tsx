import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { useConfirmationDialog } from "../hooks/useConfirmationDialog";
import { useEffect, useState } from "react";
import { createOrderBuy, getAllOrderData } from "../redux/orders/orderSlice";
import { toggleCart } from "../redux/cart/cartSlice";
import { IoClose } from "react-icons/io5";
import { CartModalItem } from "./CartModalItem";

import style from '../style/navbar.module.css';

export const CartModal = () => {
    const navigate = useNavigate();
    const { token, user } = useAppSelector((state) => state.auth);
    const { cartItems, subTotal, cost } = useAppSelector((state) => state.cart);
    const dispatch = useAppDispatch();
    const showConfirmation = useConfirmationDialog();

    const [orderData, setOrderData] = useState({
        userID: user?.id,
        products: cartItems.map(item => ({
            productID: item.id,
            name: item.name,
            quantity: item.quantity ?? 0,
            price: item.price
        })),
        amount: subTotal,
        status: false,
        total: subTotal + cost
    });

    useEffect(() => {
        setOrderData({
            userID: user?.id,
            products: cartItems.map(item => ({
                productID: item.id,
                name: item.name,
                quantity: item.quantity ?? 0,
                price: item.price ?? 0
            })),
            amount: subTotal,
            status: false,
            total: subTotal + cost
        });

    }, [cartItems, user, cost, subTotal]);

    const handleBuy = async () => {
        const result = await showConfirmation();
        if (result.isConfirmed) {
            try {
                console.log("Order data before dispatch:", orderData);
                await dispatch(createOrderBuy(orderData)).unwrap();
                Swal.fire({
                    title: '¡Compra exitosa!',
                    text: 'Tu orden ha sido procesada',
                    icon: 'success'
                });
                dispatch(toggleCart());
               await dispatch(getAllOrderData()).then(() => navigate('/orders'));
            } catch (error) {
                Swal.fire({
                    title: 'Error',
                    text: 'Hubo un problema al procesar tu compra',
                    icon: 'error'
                });
                console.log(error);
            }
        }
    };

    const handleClose = () => dispatch(toggleCart());

    return (
        <>
            <div className={style.cartModal}>
                <h2 className={style.modalTitle}>Carros de Compras  <IoClose onClick={() => dispatch(toggleCart())} /></h2>
                <hr />

                <div className={style.modalContent}>
                    {
                        !cartItems.length
                            ? <p>carro vacio</p>
                            : <CartModalItem />
                    }
                </div>
                <button className={style.modalButton}>
                    {
                        !cartItems.length
                            ? (<Link to="/products" onClick={handleClose}>
                                Seguir Comprando
                            </Link>)
                            : token
                                ? (<span onClick={handleBuy} >Comprar</span>)
                                : (<Link to="/login" onClick={handleClose}>
                                    Iniciar sesión para comprar
                                </Link>)

                    }
                </button>
            </div>
            <div className={style.overlay} onClick={handleClose}></div>
        </>
    )
}