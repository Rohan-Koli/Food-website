import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name:"filterData",
    initialState:{
        type:"",
        order:""
    },
    reducers:{
        setType: (state,action)=>{  
           state.type=action.payload;  
        },
        setOrderFlow:(state,action)=>{
            state.order=action.payload
        }

    }
})

export default filterSlice.reducer

export const{setType,setOrderFlow} = filterSlice.actions