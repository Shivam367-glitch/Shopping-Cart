import { configureStore } from "@reduxjs/toolkit"; 
import cartReducer from "./slices/cartSlice";
const store=configureStore({
    reducer:{
        cart:cartReducer
    }
})  

const unScribe=store.subscribe(()=>{
    console.log(store.getState()); 
});


unScribe();

export default store;