import {  createCommentsThunk, deleteCommentsThunk, updateCommentsThunk } from "../redux/comments/handleComments";
import { createProduct, deleteProduct, updateProduct } from "../redux/data/helperProduct";
import { deleteUserThunk, updateUserThunk } from "../redux/log/handleUsers";

export const actionMap = {
    product:{
        create:createProduct,
        update:updateProduct,
        delete:deleteProduct
    },
    user:{
        update:updateUserThunk,
        delete:deleteUserThunk
    },
    comment:{
        create:createCommentsThunk,
        update:updateCommentsThunk,
        delete:deleteCommentsThunk
    }
}