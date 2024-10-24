import { CartState } from '../../interface/cartState';
import { Productos } from "../../interface/Productos";

export const addItem = ({ cartItems }: CartState, producto: Productos) => {

    const index = cartItems.findIndex(item => item.id === producto.id)

    if (index !== -1) {
        if (cartItems[index].stock > 0) {
            cartItems[index].quantity = (cartItems[index].quantity || 0) + 1
            cartItems[index].stock = (cartItems[index].stock || 0) - 1
        }
    } else {

        if (producto.stock > 0) {
            cartItems.push({
                ...producto,
                quantity: 1,
                stock: (producto.stock || 0) - 1
            })
        }

    }
    return cartItems;
}


export const removeItem = ({ cartItems }: CartState, producto: Productos) => {

    const index = cartItems.findIndex(item => item.id === producto.id)

    if (index !== -1) {
        if (cartItems[index].quantity === 1) {
            cartItems.splice(index, 1)
        } else {
            cartItems[index].quantity = (cartItems[index].quantity || 1) - 1
            cartItems[index].stock = (cartItems[index].stock || 0) + 1
        }
    }
    return cartItems
}

export const sendCost = ({ cartItems }: CartState) => {

    const montoGratis = 10000;
    const costoEnvio = 2000;

    const total = cartItems.reduce((acc, producto) => acc + (producto.price * (producto.quantity || 0)), 0)

    return total >= montoGratis
        ? 0
        : cartItems.length * costoEnvio

};

export const resetCost = ({ cartItems, cost }: CartState) => {
    if (cartItems.length === 1 && cartItems[0].quantity === 1) {
        return 0
    }

    return cost
}

