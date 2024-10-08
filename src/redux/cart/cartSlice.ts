import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartState } from "../../interface/cartState";
import { addItem, removeItem } from "./cartHelper";
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
            state.cartItems = addItem(state , action.payload);
        },
        removeToCart:( state:CartState, action:PayloadAction<Productos>) =>{
            state.cartItems = removeItem(state , action.payload);
        }
    },
});


export const { addToCart, removeToCart } = cartSlice.actions;
export default cartSlice.reducer;