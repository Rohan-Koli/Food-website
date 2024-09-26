import React from 'react'
import FoodCard from './FoodCard'
import FoodData from './FoodData.js'
import toast, { Toaster } from 'react-hot-toast';
import { useSelector } from 'react-redux';

function FoodItems() {
  const handleToast=(name)=> toast.success(`Added ${name} to cart`)
  let category = useSelector((state)=>state.category.category)
  let search = useSelector((state)=>state.search.search)
  const filterItems = useSelector((state)=>state.filterData.type)
  const filterOrder = useSelector((state)=>state.filterData.order)
  

  if(filterItems=="rating"){
    if(filterOrder=="High_to_Low"){
      FoodData.sort((a, b) => b.rating - a.rating);
      }
      else if(filterOrder == "Low_to_High"){
        FoodData.sort((a, b) => a.rating - b.rating);
      }
  }
  else if(filterItems == "price"){
    if(filterOrder=="High_to_Low"){
      FoodData.sort((a, b) => b.price - a.price);
      }
      else if(filterOrder == "Low_to_High"){
        FoodData.sort((a, b) => a.price - b.price);
      }
  }

  
  return (
    <>
    <Toaster
  position="top-center"
  reverseOrder={false}
/>
    <div className='flex flex-wrap  dark:bg-gray-800 dark:text-gray-200 border-black gap-10 justify-center px-6 py-10 '>
    {
      
      FoodData.filter((food)=>{
        if(category==="All"){
          return (food.name.toLowerCase().includes(search.toLowerCase()))
        }
        else{
           return category == food.category &&
           food.name.toLowerCase().includes(search.toLowerCase());
        }
      }).map((food)=>{
        return <>
         
        <FoodCard 
         key={food.id}
         id={food.id}
         price={food.price}
         name={food.name}
         desc={food.desc}
         rating={food.rating}
         img={food.img}
         handleToast={handleToast}
        
         />
     
         </>
      })
    }
    
    {/* FoodData.map((food)=>{
        
        return <>
        <FoodCard 
         key={food.id}
         id={food.id}
         price={food.price}
         name={food.name}
         desc={food.desc}
         rating={food.rating}
         img={food.img}
         handleToast={handleToast}
        
         />
     
         </>
        
       }) */}
 
       
     
    </div>
    </>
  )
}

export default FoodItems