import { Productos } from "./Productos";


export interface CartState{
    cartItems: Productos[],
    count: number,
    cost: number,
    hidden: boolean
}