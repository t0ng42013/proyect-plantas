import { ActionReducerMapBuilder, createAsyncThunk } from "@reduxjs/toolkit";
import { deleteUser, getAllUsers, updateUser } from "../../services/usersServices";
import { UserData } from "../../interface/UserData";



export const getUserThunk = createAsyncThunk('users/fetchUsers', async () => {
    const users = await getAllUsers();
    return users;
});

export const updateUserThunk = createAsyncThunk('users/updateUser', async (credential:UserData) => {
    const users = await updateUser(credential);
    return users;
});

export const deleteUserThunk = createAsyncThunk('users/deleteUser', async (credential:UserData) => {
    const users = await deleteUser(credential);
    return users;
});

interface UsuarioState {
    log: boolean;
    usuarios: UserData[];
    isLoading: boolean;
    error: null;
}


// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const handleAsync = (builder:ActionReducerMapBuilder<UsuarioState>, thunk:any, onSucces:(state:UsuarioState,action:any)=>void) => {
    builder
        .addCase(thunk.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        })
        .addCase(thunk.fulfilled, (state, action) => {
            state.isLoading = false;
            onSucces(state, action);
        })
        .addCase(thunk.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
        });
}