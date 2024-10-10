import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartState } from '../../interface/cartState';
import { addItem, removeItem, resetCost } from './cartHelper';
import { Productos } from "../../interface/Productos";


const INITIALSTATE: CartState = {
    cartItems: [],
    count: 0,
    cost: 0,
    hidden: false,
};

export const cartSlice = createSlice({
    name: "cart",
    initialState: INITIALSTATE,
    reducers: {
        addToCart: ( state: CartState, action:PayloadAction<Productos>) =>{
           return{
            ...state,
            cartItems:  addItem(state, action.payload),
            cost: 500
           };
        },
        removeToCart:( state:CartState, action:PayloadAction<Productos>) =>{
            return{
                ...state,
                cartItems: removeItem(state, action.payload),
                cost: resetCost( state)
            }
        }
    },
});


export const { addToCart, removeToCart } = cartSlice.actions;
export default cartSlice.reducer;