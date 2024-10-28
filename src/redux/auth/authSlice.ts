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
    try {
        const user = await loginUser(credential);
        return user;
    } catch (error) {
        return console.log(error)
    }
});
export const register = createAsyncThunk('auth/register', async (credential: ILoginCred) => {
    try {
        return await registerUser(credential);
    } catch (error) {
        return console.log(error)
    }
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
            })
            .addCase(login.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload as string;
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
            })
            .addCase(register.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload as string;
            })

    },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;