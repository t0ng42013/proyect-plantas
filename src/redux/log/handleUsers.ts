import { createAsyncThunk } from "@reduxjs/toolkit";
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




export const handleAsync = (builder, thunk, onSucces) => {
    builder
        .addCase(thunk.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(thunk.fulfilled, (state, action) => {
            state.loading = false;
            onSucces(state, action);
        })
        .addCase(thunk.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });
}