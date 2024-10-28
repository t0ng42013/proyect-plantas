import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createOrder, getAllOrder } from "../../services/orderServices";
import { Orders } from "../../interface/Orders";



interface OrderState{
    orders: Orders[];
    isLoading: boolean;
    error: null | string | undefined;
}

const INITIAL_STATE:OrderState = {
    orders: [],
    isLoading: false,
    error: null
}

export const createOrderBuy = createAsyncThunk('order/createNewOrder', async (buyUser:Orders) => {
    try {
        const order = await createOrder(buyUser);
        return order;
    } catch (error) {
     console.error(error);   
    }
});

export const getAllOrderData = createAsyncThunk('order/getAllOrderData', async () => {
    try {
        const order = await getAllOrder();
        return order || [];
    } catch (error) {
        console.error(error);
        return [];
    }
})


const orderSlice = createSlice({
    name: 'order',
    initialState: INITIAL_STATE,
    reducers: {
        setOrders: (state, action) => {
            state.orders = action.payload;
        }
    },
    extraReducers(builder) {
        builder
            .addCase(createOrderBuy.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(createOrderBuy.fulfilled, (state, action) => {
                state.isLoading = false;
                state.orders = (action.payload);
            })
            .addCase(createOrderBuy.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload as string;
            })
            .addCase(getAllOrderData.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(getAllOrderData.fulfilled, (state, action) => {
                state.isLoading = false;
                state.orders = action.payload || [];
            })
            .addCase(getAllOrderData.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload as string;
            });
    },

})

export const { setOrders } = orderSlice.actions;

export default orderSlice.reducer;