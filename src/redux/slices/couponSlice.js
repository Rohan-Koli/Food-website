import { createSlice } from "@reduxjs/toolkit";

const couponSlice = createSlice({
    name:"coupon",
    initialState:{
        coupon:[]
    },
    reducers:{
        addCoupon:(state,action)=>{
            const existingCoupon = state.coupon.some((item)=>{
                return item.id == action.payload.id
            })
            if(state.coupon.length == 0){
                state.coupon.push(action.payload)
            }else{
                
                if(!existingCoupon){
                    state.coupon.push(action.payload) 
                }else{
                    console.log("exsting coupom "+ existingCoupon)
                }
            }
           },
         removeCoupon:(state,action)=>{
            state.coupon = state.coupon.filter((item)=> item.id != action.payload.id)
         }  
    }
})

export default couponSlice.reducer
export const {addCoupon,removeCoupon} = couponSlice.actions