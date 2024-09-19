import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import productSlice from "./apiSlice"

const Store=configureStore({
    reducer:{
        cart:cartSlice,
        product:productSlice
       
    }
})
export default Store;