import {createSlice} from "@reduxjs/toolkit"

const CartSlice = createSlice({
    name :"cart",
    initialState :{
        cart: []
    },
    reducers:{
        addToCart:(state,action)=>{
            const existing = state.cart.find((item)=>{
                
                return item.id == action.payload.id
            })
            // while changing state using map function never use parentheses like we usally do because it will wrap the state in parentheses{}
            // which will make state null 
            // if(existing){
            //     state.cart = state.cart.map((item)=>{item.id == action.payload.id ? {...item,qty:item.qty+1} : item)}
            // }
            if(existing){
                state.cart = state.cart.map((item)=>item.id == action.payload.id ? {...item,qty:item.qty+1} : item)
            }else{
                state.cart.push(action.payload)
            }
            
           },
        removeFromCart :(state,action)=>{state.cart = state.cart.filter(item=>item.id !=action.payload.id)},
        incrementQty:(state,action)=>{
            state.cart=state.cart.map((item)=>item.id==action.payload.id ? {...item,qty:item.qty+1}: item)
        },
        decrementQty:(state,action)=>{
            state.cart=state.cart.map((item)=>item.id==action.payload.id ? {...item,qty:item.qty-1}: item)
        },
    }
})

export const {addToCart,removeFromCart,increase,incrementQty,decrementQty} = CartSlice.actions
export default CartSlice.reducer