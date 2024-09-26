import {couponsArray} from './Coupons';
import React, { useState } from 'react';
import { RiDiscountPercentFill } from "react-icons/ri";
import { IoMdCloseCircle } from "react-icons/io"
import { useDispatch } from 'react-redux';
import { addCoupon } from '../redux/slices/couponSlice';
import toast, { Toaster } from 'react-hot-toast';

const Offers = () => {
    const [activeOffer, setActiveOffer] = useState(false);
    console.log(couponsArray)
    const addCouponToast=(name)=> toast.success(`Coupon ${name} added `)
    const currentDate = new Date()
    const dispatch = useDispatch()
    
    
    return (
        <>
            {activeOffer ? 
                <div className="flex flex-col top-4 right-0 rounded-md   dark:text-gray-800 -mx-1 w-60 bg-gray-100 border-2 gap-2  z-50 p-2">
                    
                    
    
                    <IoMdCloseCircle className='' onClick={() => setActiveOffer(!activeOffer)} />
                    {couponsArray ? couponsArray.map((item)=>{
                        return (
                        <div key={item.id} onClick={()=>{
                            
                            dispatch(addCoupon(item))
                            addCouponToast(item.name)
                        } } className={`flex flex-wrap text-center ${currentDate > item.endDate && "pointer-events-none"} bg-slate-300  h-20 rounded-md overflow-auto`}>
                            <div  className={`flex flex-wrap ${(currentDate < item.endDate) ?"bg-green-600" : "bg-gray-500 "}  ml-0 w-2/4 px-2 text-inherit items-center justify-center`}> {item.type == "percentage" ?<p className='font-bold text-2xl'>{item.discount}% Off</p> : <p className='font-bold text-2xl'>{item.discount} Rs. Off</p>} </div>
                            
                            <div className={` flex flex-wrap ${(currentDate < item.endDate) ?"bg-green-300" : "bg-gray-300"}  w-2/4 ml-0 items-center justify-center `}>
                                <div className='items-center justify-center'><p className=' font-bold ' >{item.name}</p>
                            
                            
                            
                            {/* <p>{`${item.startDate.getDate()}/${item.startDate.getMonth()}/${item.startDate.getFullYear()}`}</p> */}
                            <p className=' text-xs'>{` ends on ${item.endDate.getDate()} ${item.endDate.toLocaleString('default', { month: 'long' }).slice(0,3)} `}</p></div>
                            </div>
                            </div>
                        )
                    }) : <p>nothing</p>}

                </div>
                :
                <RiDiscountPercentFill 
                    className="flex  text-2xl z-50 transition-all m-2 duration-300 cursor-pointer animate-bounce"
                    onClick={() =>{ 
                        setActiveOffer(!activeOffer)
                        
                    }} 
                />
            }
        </>
    );
}

export default Offers;
