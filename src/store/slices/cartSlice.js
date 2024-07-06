import {createSlice} from "@reduxjs/toolkit"; 
import { toast } from "react-toastify";
const initialState=JSON.parse(localStorage.getItem('cartItems'))||[];  


// const message=new toast();
const cartSlice=createSlice({
    name:'cart',
    initialState,
    reducers:{
      addToCart(state,action){
        state.push(action.payload);  
        localStorage.setItem('cartItems',JSON.stringify(state));
        toast.success(`${action?.payload?.title} 
          is added to cart`);
      },
      deleteFromCart(state, action) { 
        toast.error(`${action?.payload?.title} is removed from cart`); 
        const filtered=state.filter(item => item.id !== action.payload.id); 
        localStorage.setItem('cartItems',JSON.stringify(filtered));
        return filtered;
      },
    }
}); 


export const {addToCart,deleteFromCart}=cartSlice.actions;

export default cartSlice.reducer;