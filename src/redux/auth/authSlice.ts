import { createSlice } from "@reduxjs/toolkit";

interface IAuthState {
    token: string | null;
    isAuthenticated: boolean;
    loading: boolean;
    user: string | null;
    error: string | null;
}

const INITIAL_STATE:IAuthState = {
    token: localStorage.getItem('token'),
    isAuthenticated: false,
    loading: false,
    user: null,
    error: null,
};


const authSlice = createSlice({
    name: 'auth',
    initialState: INITIAL_STATE,
    reducers: {
        // loginStart: (state) => {
        // state.loading = true;
        // state.error = null;
        // },
        // loginSuccess: (state, action) => {
        // state.user = action.payload;
        // state.loading = false;
        // state.error = null;
        // },
        // loginFail: (state, action) => {
        // state.loading = false;
        // state.error = action.payload;
        // },
        // logout: (state) => {
        // state.user = null;
        // state.loading = false;
        // state.error = null;
        // },
    },
});

export default authSlice.reducer;