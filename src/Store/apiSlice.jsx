import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const initialState={
    products:[],
    status:'idle'
}
const productSlice=createSlice({
    name:"product",
    initialState,
   extraReducers:(builder)=>{
    builder.addCase(getProducts.fulfilled,(state,action)=>{
        state.products=action.payload
          state.status='idle'
    }).addCase(getProducts.rejected,(state,action)=>{
         state.status='error'
            }).addCase(getProducts.pending,(state,action)=>{
        state.status='loading'
    })
   
    }

});

export const {fetchProducts}=productSlice.actions;
export default productSlice.reducer;


export const getProducts=createAsyncThunk('p/get',async()=>{
    const data=await fetch(" https://fakestoreapi.com/products");
    const result= await data.json();
    return result;
})

