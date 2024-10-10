import React from 'react';
import Navbar from '../Cpmponents/Navbar';
import CategoryMenu from '../Cpmponents/CategoryMenu';
import FoodItems from '../Cpmponents/FoodItems';
import { Cart } from '../Cpmponents/Cart';
import { darkModeFunction } from '../redux/slices/darkModeSlice';
import { useDispatch,useSelector } from 'react-redux';

function Home() {
  const darkMode = useSelector(state=>state.darkMode.darkMode)
  const appliedCoupons = useSelector(state => state.coupon.coupon)
  const dispatch = useDispatch()
  return (
    <>
    
    <div className={`${darkMode ? "dark": " "}  dark:bg-gray-800 w-full dark:text-gray-100`}>
    <div className='absolute right-10 top-9 z-30  lg:top-20'> 
     </div>
    <Navbar />
    <CategoryMenu  />
    <FoodItems />
    <Cart />
    </div>
    
    </>
  )
}

export default Home