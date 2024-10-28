import { Productos } from "./Productos";


export interface CartState{
    cartItems: Productos[],
    modal: boolean,
    cost: number,
    hidden: boolean,
    subTotal: number
}