import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { deleteUserThunk, getUserThunk, handleAsync, updateUserThunk } from "./handleUsers";
import { UserData } from "../../interface/UserData";
import { showToast } from "../../hooks/useConfirmationDialog";

interface UsuarioState {
    log: boolean;
    usuarios: UserData[];
    isLoading: boolean;
    error: null;
}

const INITIAL_STATE: UsuarioState = {
    log: false,
    usuarios: [],
    isLoading: false,
    error: null,
};



const loginSlice = createSlice({
    name: 'user',
    initialState: INITIAL_STATE,
    reducers: {
        toggleUserLog: (state: UsuarioState, action: PayloadAction<boolean>) => {
            return {
                ...state,
                log: action?.payload === undefined ? !state.log : action.payload
            }
        },
    },
    extraReducers(builder) {
        handleAsync(builder, getUserThunk, (state: UsuarioState, action: PayloadAction<UserData[]>) => {
            state.usuarios = action.payload;
        });
        handleAsync(builder, updateUserThunk, (state: UsuarioState, action: PayloadAction<UserData>) => {
            state.usuarios = state.usuarios.map((user) => {
                if (user.id === action.payload.id) {
                    return action.payload;
                }
                return user;
            });
        });
        handleAsync(builder, deleteUserThunk, (state: UsuarioState, action: PayloadAction<{ id: number, msg: string }>) => {
            showToast(action.payload?.msg)
            state.usuarios = state.usuarios.filter((user) => user.id !== action.payload?.id);
        });
    },
});

export const { toggleUserLog } = loginSlice.actions;
export default loginSlice.reducer;