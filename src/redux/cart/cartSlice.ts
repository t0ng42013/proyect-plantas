import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartState } from '../../interface/cartState';
import { addItem, removeItem, resetCost, sendCost } from './cartHelper';
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
        addToCart: (state: CartState, action: PayloadAction<Productos>) => {
            return {
                ...state,
                cartItems: addItem(state, action.payload),
                cost: sendCost(state)
            };
        },
        removeToCart: (state: CartState, action: PayloadAction<Productos>) => {
            return {
                ...state,
                cartItems: removeItem(state, action.payload),
                cost: resetCost(state)
            }
        },
        clearCart: (state:CartState) => {
            return {
                ...state,
                cartItems: [],
                cost: 0
            }
        },
        toggleCart: (state:CartState) => {
            return {
                ...state,
                hidden: !state.hidden
            }
        }
    },
});


export const { addToCart, removeToCart, clearCart, toggleCart } = cartSlice.actions;
export default cartSlice.reducer;