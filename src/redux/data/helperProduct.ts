import { createAsyncThunk } from "@reduxjs/toolkit";
import { createProductSrv, deleteProductSrv, getProduct, updateProductSrv } from "../../services/productServices";
import { Productos } from "../../interface/Productos";

export const getProducts = createAsyncThunk('products/fetchProducts', async () => {
    const products = await getProduct();
    return products;
})

export const createProduct = createAsyncThunk('products/createProduct', async (credentials:Productos) => {
    const products = await createProductSrv(credentials);
    return products;
})

export const updateProduct = createAsyncThunk('products/updateProduct', async (credentials: Productos) => {
    const products = await updateProductSrv(credentials);
    return products;
})

export const deleteProduct = createAsyncThunk('products/deleteProduct', async (credentials: Productos) => {  
    const products = await deleteProductSrv(credentials)
    return products;
})


export const handleAsync = (builder: any, thunkAction: any, onSuccess: any) => {
    builder
        .addCase(thunkAction.pending, (state: any) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(thunkAction.fulfilled, (state: any, action: any) => {
            state.loading = false;
            onSuccess(state, action);
        })
        .addCase(thunkAction.rejected, (state: any, action: any) => {
            state.loading = false;
            state.error = action.error.message;
        });
};