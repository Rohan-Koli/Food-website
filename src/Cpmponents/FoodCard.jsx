import React from 'react'
import {AiFillStar} from "react-icons/ai"
import { useDispatch,useSelector } from 'react-redux'
import { addToCart,increase } from '../redux/slices/cartSlice'

function FoodCard({id,name,price,rating,desc,img,handleToast}) {
  const dispatch = useDispatch()
  

  
  
  return (
    <>
    <div className='font-bold w-[250px] max-420:w-1/2 max-420:text-xs dark:bg-gray-700 dark:text-gray-200 bg-gray-200 p-5 flex flex-col rounded-lg gap-2'>
        
        <img src={img} 
        className='w-auto h-[130px] hover:scale-110 cursor-grab transition-all duration-500 ease-in-out'
        />
        
        <div className="text-sm flex justify-between">
        <h2>{name}</h2>
        <span className='text-green-500'>₹{price}</span>
        </div>
        <div>
            <p className='text-sm font-normal'>{desc.slice(0,50)}...</p>
            <div className='flex flex-wrap gap-1 justify-between'>
                <span className='flex justify-center items-center'>
                <AiFillStar className='mr-1 text-yellow-400' />{rating}
                </span>
                <button className='p-1 text-white max-420:text-xs bg-green-500 hover:bg-green-700 rounded-lg text-sm' onClick={()=>{
                  dispatch(addToCart({id,name,img,price,rating,desc,qty:1}))
                  handleToast(name)
                  }}> Add to Cart</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default FoodCard