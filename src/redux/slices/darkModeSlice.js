import {createSlice} from "@reduxjs/toolkit"

const darkModeSlice = createSlice({
    name:"darkMode",
    initialState:{
        darkMode:false
    },
    reducers:{
        darkModeFunction:(state)=>{
            
            if(state.darkMode == true){
            state.darkMode = false
            }else if(state.darkMode == false){
                state.darkMode = true
            }
        }
    }
})

export default darkModeSlice.reducer;
export const {darkModeFunction} = darkModeSlice.actions