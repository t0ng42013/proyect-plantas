import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginUser, registerUser } from "../../services/authServices";
import { ILoginCred } from "../../interface/LoginCredential";
import { decodeToken } from "../../services/jwtServices";
import { UserData } from "../../interface/UserData";
interface IAuthState {
    token: string | null;
    user: UserData | null;///nombre de login
    isAuthenticated: boolean;
    isLoading: boolean;
    error: string | null;
}

const token = localStorage.getItem('token');

const INITIAL_STATE: IAuthState = {
    token: localStorage.getItem('token') || '',
    user: token ? decodeToken(token) : null,
    isAuthenticated: !!token,
    isLoading: false,
    error: null,
};


export const login = createAsyncThunk('auth/login', async (credential: ILoginCred) => {
    const user = await loginUser(credential);
    return user;
});
export const register = createAsyncThunk('auth/register', async (credential: ILoginCred) => { 
        return await registerUser(credential);  
});

const authSlice = createSlice({
    name: 'auth',
    initialState: INITIAL_STATE,
    reducers: {
        logout: (state: IAuthState) => {
            localStorage.removeItem('token');
            state.token = null;
            state.isAuthenticated = false;
            state.user = null;
        }
    },
    extraReducers(builder) {
        builder
            // Login cases
            .addCase(login.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.isLoading = false;
                state.token = action.payload?.token ?? null;
                state.user = decodeToken(action.payload.token);
                state.isAuthenticated = true;
                localStorage.setItem('token', action.payload.token);
            })
            .addCase(login.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message as string;
            })
            // Register cases
            .addCase(register.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(register.fulfilled, (state, action) => {
                state.isLoading = false;
                state.token = action.payload.token;
                state.user = decodeToken(action.payload.token);
                state.isAuthenticated = true;
                localStorage.setItem('token', action.payload.token);
            })
            .addCase(register.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message as string;
            })

    },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;