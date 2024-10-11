import { CartState } from "../../interface/cartState";
import { Productos } from "../../interface/Productos";

export const addItem = ({ cartItems }: CartState, producto: Productos) => {

    const newCartItem = [...cartItems]
    const index = newCartItem.findIndex(item => item.id === producto.id);

    if (index !== -1) {
        newCartItem[index] = {
            ...newCartItem[index],
            cantidad: (newCartItem[index].cantidad || 0) + 1
        };
    } else {
        newCartItem.push({ ...producto, cantidad: 1 });
    }

    return newCartItem;
}


export const removeItem = ({ cartItems }: CartState, producto: Productos) => {

    const newCartItem = [...cartItems];
    const index = newCartItem.findIndex(item => item.id === producto.id);

    if (index !== -1) {
        newCartItem[index] = {
            ...newCartItem[index],
            cantidad: (newCartItem[index].cantidad || 1) - 1
        };
    } else {
        newCartItem.splice(index, 1);
    }

    return newCartItem;
}

export const sendCost = ({cartItems}:CartState) => {
   
   const montoGratis= 10000;
   const costoEnvio= 2000;

   const total = cartItems.reduce((acc,producto)=> acc + (producto.precio * (producto.cantidad || 0)),0)

  return total >= montoGratis
   ?0
   :cartItems.reduce((acc,producto)=> acc + ((producto.cantidad|| 0) * costoEnvio),0)

};

export const resetCost = ({ cartItems, cost }: CartState) => {
    if (cartItems.length === 1 && cartItems[0].cantidad === 1) {
        return 0
    }

    return cost
}