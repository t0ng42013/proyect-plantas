import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../cart/cartSlice";
import userReducer from "../log/loginSlice";
import filterReducer from "../filter/filterSlice";
import authReducer from "../auth/authSlice";
import productsReducer from "../data/productSlice";


export const  store = configureStore({
    reducer:{
        cart: cartReducer,
        user: userReducer,
        filter: filterReducer,
        auth: authReducer,
        products: productsReducer,
    },
});

// Infer the `RootState`,  `AppDispatch`, and `AppStore` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store