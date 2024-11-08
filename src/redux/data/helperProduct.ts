import { ActionReducerMapBuilder, createAsyncThunk } from "@reduxjs/toolkit";
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

interface DataState {
    id?: string;
    data: Productos[];
    isLoading: boolean;
    error: null | string | undefined;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const handleAsync = (builder: ActionReducerMapBuilder<DataState>, thunkAction: any, onSuccess: (state:DataState,action:any)=>void) => {
    builder
        .addCase(thunkAction.pending, (state: DataState) => {
            state.isLoading = true;
            state.error = null;
        })
        .addCase(thunkAction.fulfilled, (state: DataState , action) => {
            state.isLoading = false;
            onSuccess(state, action);
        })
        .addCase(thunkAction.rejected, (state: DataState, action) => {
            state.isLoading = false;
            state.error = action.error?.message as string;
        });
};