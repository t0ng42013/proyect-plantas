import { createAsyncThunk } from "@reduxjs/toolkit";
import { createComment, deleteComment, getAllComments, updateComment } from "../../services/commentsServices";
import { IComments } from "../../interface/Comment";

export const getAllCommentsThunk = createAsyncThunk('comments/fetchComments', async () => {
    const comments = await getAllComments();
    return comments;
});

export const createCommentsThunk = createAsyncThunk('comments/createComments', async (credential:IComments) => {
    const comment = await createComment(credential);
    return comment;
});

export const updateCommentsThunk = createAsyncThunk('comments/updateComments', async (credential:IComments) => {
    const comments = await updateComment(credential);
    return comments;
});

export const deleteCommentsThunk = createAsyncThunk('comments/deleteComments', async (credential:IComments) => {
    const comments = await deleteComment(credential);
    return comments;
});


export const handleAsync = (builder,thunk,onSucces) =>{
    builder
        .addCase(thunk.pending,(state)=>{
            state.loading = true;
            state.error = null;
        })
        .addCase(thunk.fulfilled,(state,action)=>{
            state.loading = false;
            onSucces(state,action);
        })
        .addCase(thunk.rejected,(state,action)=>{
            state.loading = false;
            state.error = action.error.message;
        })
}

