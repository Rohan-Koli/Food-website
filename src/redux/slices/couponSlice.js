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
                if(existingCoupon){
                    alert("Coupon added") 
                }
                else if(state.coupon.length <= 1){
                    alert("Only one coupon will be added at a time")
                    
                    console.log(action.payload)
                    
                }
                
            }
            
           },
         removeCoupon:(state,action)=>{
            state.coupon = state.coupon.filter((item)=> item.id != action.payload.id)
         },
         emptyCoupon:(state)=>{
            
            state.coupon = [];
         }
    }
})

export default couponSlice.reducer
export const {addCoupon,removeCoupon,emptyCoupon} = couponSlice.actions