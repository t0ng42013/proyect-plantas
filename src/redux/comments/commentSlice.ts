import {  createSlice, PayloadAction } from "@reduxjs/toolkit";
import {   createCommentsThunk, deleteCommentsThunk, getAllCommentsThunk, handleAsync, updateCommentsThunk } from "./handleComments";
import { IComments } from "../../interface/Comment";
import { showToast } from "../../hooks/useConfirmationDialog";


interface CommentState{
    comments: IComments[];
    loading: boolean;
    error: null | string | undefined;
}

const INITIAL_STATE: CommentState = {
    comments: [] ,
    loading: false,
    error: null
}


const commentSlice = createSlice({
    name: 'comments',
    initialState: INITIAL_STATE,
    reducers: {},
    extraReducers(builder) {
   
        handleAsync(builder, createCommentsThunk, (state:CommentState, action:PayloadAction<IComments>) => {
            state.comments = [...state.comments, action.payload];
        });

        handleAsync(builder, getAllCommentsThunk, (state: CommentState, action:PayloadAction<IComments[]>) => {
            state.comments = action.payload;
        });      

        handleAsync(builder, updateCommentsThunk, (state: CommentState, action:PayloadAction<IComments>) => {
           state.comments = state.comments.map(comm=>{
            if(comm.id === action.payload.id) {
              return  action.payload
            }
            return comm 
           })
           
            
        });

        handleAsync(builder, deleteCommentsThunk,(state: CommentState, action:PayloadAction<IComments>) => {
            showToast(action.payload?.msg )
            state.comments = state.comments.filter(comment => comment.id !== action.payload.id);
        });
    },
})




export default commentSlice.reducer;