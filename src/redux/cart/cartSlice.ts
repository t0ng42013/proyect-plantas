import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartState } from '../../interface/cartState';
import { addItem, removeItem, resetCost, sendCost } from './cartHelper';
import { Productos } from "../../interface/Productos";


const INITIALSTATE: CartState = {
    cartItems: [],
    modal: false,
    cost: 0,
    hidden: false,
    subTotal: 0,
};

export const cartSlice = createSlice({
    name: "cart",
    initialState: INITIALSTATE,
    reducers: {
        addToCart: (state: CartState, action: PayloadAction<Productos>) => {           
            state.cartItems = addItem(state, action.payload);
            state.cost = sendCost(state);
        },
        removeToCart: (state: CartState, action: PayloadAction<Productos>) => {
            state.cartItems = removeItem(state, action.payload);
            state.cost = sendCost(state);
            resetCost(state);
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
        },
        toggleModal: (state:CartState) => {
            return {
                ...state,
                modal: !state.modal
            }
        },
        subtotal:(state:CartState)=>{
            state.subTotal =state.cartItems.reduce((acc, producto) => acc + (producto.price * (producto.quantity || 0) ), 0);
        }
    },
});


export const { addToCart, removeToCart, clearCart, toggleCart, toggleModal, subtotal } = cartSlice.actions;
export default cartSlice.reducer;