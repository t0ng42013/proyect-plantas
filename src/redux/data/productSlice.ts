import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Productos } from "../../interface/Productos";
import { getProduct } from "../../services/productServices";



interface DataState{
    data:Productos[];
    isLoading:boolean;
    error: null | string | undefined;
}

const INITIAL_STATE:DataState = {
    data:[],
    isLoading: false,
    error:null
}

export const fetchProducts = createAsyncThunk('products/fetchProducts', async()=>{
    const products = await getProduct();
    console.log(products)
    return products;
} )


const productSlice = createSlice({
name: "products",
initialState:INITIAL_STATE,
reducers: {},
extraReducers(builder) {
    builder.addCase(fetchProducts.pending, (state) => {
        state.isLoading = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
        state.data = action.payload;
        state.isLoading = false;
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
        state.error = action.error.message;
        state.isLoading = false;
    });
},
});

export default productSlice.reducer;