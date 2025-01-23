import React, { useEffect } from 'react'
import { IoMdCloseCircle } from "react-icons/io"
import CartItem from './CartItem'
import { useSelector } from "react-redux";
import { useState } from 'react';
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom"
import { RiDiscountPercentFill } from "react-icons/ri";
import Offers from './Offers';
import { BiSolidCoupon } from "react-icons/bi";
import { removeCoupon,emptyCoupon } from '../redux/slices/couponSlice';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';


export const Cart = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const appliedCoupons = useSelector(state => state.coupon.coupon)
  const [activeCart, setActiveCart] = useState(false)
  const cartItems = useSelector((state) => state.cart.cart)
  console.log("this is cart")
  console.log(cartItems)
  const totalQty = cartItems.reduce((totalQty, item) => totalQty + item.qty, 0)
  const totalPrice = cartItems.reduce((total, item) => total + item.qty * item.price, 0)
  let totalRupeesDiscount = 0
  let totalPercentageDiscount = 0
  appliedCoupons.map((item) => {
    if (item.type == "rupees") {
      totalRupeesDiscount = totalRupeesDiscount + item.discount
    } else if (item.type == "percentage") {
      totalPercentageDiscount = totalPercentageDiscount + item.discount
    }
  })

  useEffect(()=>{
    if(cartItems.length ==0){
      dispatch(emptyCoupon());
    }
  },[cartItems]) 
  function totalDiscountedPrice() {
    if (totalRupeesDiscount != 0 && totalPercentageDiscount != 0) {
      return (totalPrice - totalRupeesDiscount) - ((totalPrice - totalRupeesDiscount) * (totalPercentageDiscount * 0.01))
    }
    else if (totalRupeesDiscount == 0 && totalPercentageDiscount != 0) {
      return (totalPrice) - ((totalPrice) * (totalPercentageDiscount * 0.01))
    }
    else if (totalRupeesDiscount != 0 && totalPercentageDiscount == 0) {
      return (totalPrice - totalRupeesDiscount)
    }
    return totalPrice
  }
  return (
    <>
      
        <div className={`fixed flex flex-wrap right-0 top-0 lg:w-[20vw] w-full h-full p-3  dark:bg-gray-800 dark:text-gray-200 bg-white shadow-md ${activeCart ? 'translate-x-0' : 'translate-x-full'} transition-all duration-300 z-40`}>
          <div className='flex-row  items-center justify-between'>
            <div className='absolute bg-red-500left-0 top-0 '>
              <div className='flex left-0 top-0 flex-wrap border-2 w-30 gap-1 items-center'>
                <div className='flex'><p className=' text-xl top-0 font-semibold'>My Orders</p></div>


              </div>

            </div>
            <IoMdCloseCircle onClick={() => { setActiveCart(!activeCart) }} className='text-xl absolute right-0 top-0 mx-4 my-1 dark:text-white border-gray-900 text-gray-900 hover:border-red-600 hover:text-red-600' />
          </div>
          <div className='flex-col overflow-scroll flex-wrap lg:flex-col h-full mt-2  mb-3'>

            {cartItems.length > 0 ? cartItems.map((food) => {
              console.log("this is food")
              console.log(food)
              return (
                <CartItem className="sm:w-full"
                  key={food.id}
                  id={food.id}
                  name={food.name}
                  img={food.img}
                  qty={food.qty}
                  price={food.price}
                />)
            }) : <h1 className=' absolute top-10 right-10 text-xl font-bold'>Your Cart is empty</h1>}
            {/* {Array.isArray(cartItems) && cartItems.map((f1) => {
            console.log("print")
            console.log(f1);
            return f1 && f1.map((item) => {
              console.log("item name = " + item.name)
              return <CartItem key={item.id} id={item.id} img={item.img} price={item.price} qty={item.qty} name={item.name} />;
            })
          })} */}

          </div>
          
            <div className='absolute bottom-0  dark:bg-gray-800 dark:text-gray-200  bg-slate-100 w-full rounded-md'>
              <div className='flex'>{cartItems.length >= 1 && <Offers />}</div>
              <div>{appliedCoupons.map((item) => <> <h3 key={item.id} className=' flex items-center bg-orange-500  text-white w-fit rounded-md m-2 mx-3 p-1 font-semibold'>
                <BiSolidCoupon className='mr-2' />  {item.name} <IoMdCloseCircle onClick={() => {
              toast(`Coupon ${item.name} removed`);
              dispatch(removeCoupon(item))
              }} className=' text-gray-800 ml-2' /></h3> </>)}</div>
              <h3 className='font-semibold '>Total amount :₹{totalDiscountedPrice()} </h3>
              <h3 className='font-semibold '>Items : {totalQty}</h3>
              
              <button onClick={() => navigate("/success")} className='bg-orange-600 text-white lg:w-[18vw] w-[90vw] rounded-lg font-semibold mb-3'>Checkout</button>
            </div>
          
        </div>
      

      <FaShoppingCart className={` fixed bottom-6 right-4 text-6xl p-4 border bg-orange-500 rounded-full ${totalQty > 0 ? "animate-bounce delay-500 transition-all" : " animate-none "} `} onClick={() => {
        
        setActiveCart(!activeCart) }} />
    </>
  )
}

