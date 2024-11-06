import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Productos } from "../../interface/Productos";
import { createProduct, deleteProduct, getProducts, handleAsync, updateProduct } from "./helperProduct";
import { showToast } from "../../hooks/useConfirmationDialog";



interface DataState {
    id?: string;
    data: Productos[];
    isLoading: boolean;
    error: null | string | undefined;
}

const INITIAL_STATE: DataState = {
    data: [],
    isLoading: false,
    error: null
}


const productSlice = createSlice({
    name: "products",
    initialState: INITIAL_STATE,
    reducers: {},
    extraReducers: (builder) => {
        handleAsync(builder, getProducts, (state: DataState, action: PayloadAction<Productos[]>) => {
            state.data = action.payload;
        });

        handleAsync(builder, createProduct, (state: DataState, action: PayloadAction<Productos>) => {
            state.data = [...state.data, action.payload];
        });
        handleAsync(builder, updateProduct, (state: DataState, action: PayloadAction<Productos>) => {
            state.data = state.data.map((product) => {
                if (product.id === action.payload.id) {
                    return action.payload;
                }
                return product;
            })

        });
        handleAsync(builder, deleteProduct, (state: DataState, action: PayloadAction<string>) => {
            showToast(action.payload?.msg)
            state.data = state.data.filter((product) => product.id !== action.payload?.id);
        });
    }
});

export default productSlice.reducer;

