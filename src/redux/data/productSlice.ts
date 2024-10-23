import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Productos } from "../../interface/Productos";
import { getProduct } from "../../services/productServices";



interface DataState{
    data:Productos[];
    loading:boolean;
    error: null | string | undefined;
}

const INITIAL_STATE:DataState = {
    data:[],
    loading: false,
    error:null
}

export const fetchProducts = createAsyncThunk('products/fetchProducts', async()=>{
    const products = await getProduct();
    return products;
} )


const productSlice = createSlice({
name: "products",
initialState:INITIAL_STATE,
reducers: {},
extraReducers(builder) {
    builder.addCase(fetchProducts.pending, (state) => {
        state.loading = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
    });
},
});

export default productSlice.reducer;