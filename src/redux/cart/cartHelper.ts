import { CartState } from "../../interface/cartState";
import { Productos } from "../../interface/Productos";

export const addItem = ( state:CartState , producto:Productos)=>{
    const existingProductIndex = state.cartItems.findIndex( item => item.id === producto.id);

    console.log(existingProductIndex)
    if(existingProductIndex !== -1){
        console.log(existingProductIndex)
        const existingProduct = state.cartItems[existingProductIndex];
        existingProduct.cantidad = (existingProduct.cantidad || 0) + 1;

    }else{
        state.cartItems.push({...producto, cantidad:1})
    }
    
    
    return state.cartItems;
}
