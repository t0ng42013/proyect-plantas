import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { useConfirmationDialog } from "../hooks/useConfirmationDialog";
import { useEffect, useState } from "react";
import { createOrderBuy, getAllOrderData } from "../redux/orders/orderSlice";
import { clearCart, toggleCart } from "../redux/cart/cartSlice";
import { IoClose } from "react-icons/io5";
import { CartModalItem } from "./CartModalItem";
import { updateProduct } from "../redux/data/helperProduct";


import style from '../style/navbar.module.css';
export const CartModal = () => {
    const { token, user } = useAppSelector((state) => state.auth);
    const { cartItems, subTotal, cost } = useAppSelector((state) => state.cart);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
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
                await dispatch(createOrderBuy(orderData)).unwrap();
                Swal.fire({
                    title: '¡Compra exitosa!',
                    text: 'Tu orden ha sido procesada',
                    icon: 'success'
                });
                //compras reducier stock generar orden y redirigir y  vaciar carro

                cartItems.forEach((cartItem) => {
                    dispatch(updateProduct(cartItem));
                })
                dispatch(clearCart());
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