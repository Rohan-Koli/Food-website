import { createSlice } from "@reduxjs/toolkit";

const CategorySlice = createSlice({
    name:"category",
    initialState:{
        category:"All",
    },
        reducers:{
            setCategory:(state,action)=>{
                state.category=action.payload;
            }
        },
    
})

export default CategorySlice.reducer;
export const {setCategory} =CategorySlice.actions