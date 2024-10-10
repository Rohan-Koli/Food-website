// import React from 'react'
// import {MdDelete} from "react-icons/md"
// import { AiOutlinePlus,AiOutlineMinus } from 'react-icons/ai'
// const CartItem = () => {
//     return (<>

//         <div>
//             <img src="https://w7.pngwing.com/pngs/204/32/png-transparent-crispy-fried-chicken-karaage-chicken-nugget-chicken-fingers-buffalo-wing-carrot-chilli-thumbnail.png"
//              alt="" className='w-[50px] h-[50px]' />
//         <div>
//             <h3>Onion Pizza</h3>
//             <div>
//                 <AiOutlinePlus className=''/>
//                 <span>2</span>
//                 <AiOutlineMinus />
//             </div>
//         </div>
//         </div>
//     </>
//     )
// }

// export default CartItem

import React from 'react'
import {MdDelete} from "react-icons/md"
import { AiOutlinePlus,AiOutlineMinus } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import {removeFromCart,incrementQty,decrementQty} from '../redux/slices/cartSlice'
import toast from 'react-hot-toast';

const CartItem = ({img, id, name, price, qty}) => {
    const dispatch= useDispatch()
    return (<>
        <div className='w-full bg-gray-200 flex  dark:bg-gray-800 dark:text-gray-200 flex-wrap h-20  rounded-lg my-2 '>
            <div className=' w-1/3 h-full flex-col flex-wrap justify-center items-center overflow-hidden rounded-lg'>
                <img src={img}
                    alt="" className='rounded-lg w-[80px] h-full' />
            </div>
            <div className='flex flex-wrap w-2/3  '>
                <div className=' w-full h-1/2 flex justify-between items-center my-1 font-semibold'><h3>{name}</h3> <MdDelete onClick={()=>{
                    dispatch(removeFromCart({id}));
                    toast(`${name} removed from cart`);
            }} className='font-bold  text-2xl mx-1'   /></div>
                <div className=' w-full h-1/2 flex justify-between items-center '>
                <div className='font-semibold'>₹{price}</div>
                <div className='flex justify-center items-center mx-1 font-bold gap-1'><AiOutlinePlus onClick={()=>dispatch(incrementQty({id}))} className=' border-gray-900 font-bold'/>{qty}<AiOutlineMinus onClick={()=>{qty > 1 ? dispatch(decrementQty({id})) : (qty=0)}} className=' border-gray-900 font-bold'/></div>
                </div>
            </div>

        </div>


    </>
    )
}

export default CartItem
