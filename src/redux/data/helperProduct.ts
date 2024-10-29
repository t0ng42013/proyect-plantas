import { createAsyncThunk } from "@reduxjs/toolkit";
import { createProductSrv, deleteProductSrv, getProduct, updateProductSrv } from "../../services/productServices";
import { Productos } from "../../interface/Productos";

export const getProducts = createAsyncThunk('products/fetchProducts', async () => {
    const products = await getProduct();
    return products;
})

export const createProduct = createAsyncThunk('products/createProduct', async (credentilas:Productos) => {
    const products = await createProductSrv(credentilas);
    return products;
})

export const updateProduct = createAsyncThunk('products/updateProduct', async (credentilas: Productos) => {
    const products = await updateProductSrv(credentilas);
    return products;
})

export const deleteProduct = createAsyncThunk('products/deleteProduct', async (credentilas: Productos) => {
    const products = await deleteProductSrv(credentilas);
    return;
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