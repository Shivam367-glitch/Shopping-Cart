import {createSlice} from "@reduxjs/toolkit"; 
import { toast } from "react-toastify";
const initialState=[]; 

// const message=new toast();
const cartSlice=createSlice({
    name:'cart',
    initialState,
    reducers:{
      addToCart(state,action){
        state.push(action.payload); 
        toast.success(`${action?.payload?.title} 
          is added to cart`);
      },
      deleteFromCart(state, action) { 
        toast.error(`${action?.payload?.title} is removed from cart`);
        return state.filter(item => item.id !== action.payload.id);
      },
    }
}); 


export const {addToCart,deleteFromCart}=cartSlice.actions;

export default cartSlice.reducer;