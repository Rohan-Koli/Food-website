import React, { useEffect, useState } from 'react'
import FoodData from './FoodData'
import { setCategory } from '../redux/slices/categorySlice'
import { useDispatch, useSelector } from "react-redux"
import { setType, setOrderFlow } from '../redux/slices/filterSlice'
import { darkModeFunction } from '../redux/slices/darkModeSlice'


function CategoryMenu() {

    const dispatch = useDispatch()
    const darkMode = useSelector(state => state.darkMode.darkMode)
    const [filter, setFilter] = useState('price')
    const [order, setOrder] = useState('High_to_Low')

    const selectedCategory = useSelector(state => state.category.category)
    const [category, setCategories] = useState([])
    const listUniqueCategories = () => {
        const uniqueCategories = [...new Set(FoodData.map((item) => item.category))]

        setCategories(uniqueCategories)
        console.log(uniqueCategories);
    }
    dispatch(setType(filter))
    dispatch(setOrderFlow(order))
    function handleFilterChange(event) {
        setFilter(event.target.value)
        dispatch(setType(event.target.value))
    }

    function handleOrderChange(event) {
        setOrder(event.target.value)
        dispatch(setOrderFlow(event.target.value))
    }

    useEffect(() => {
        listUniqueCategories();
        console.log("this is categrory");
        console.log(category)

    }, [])
    useEffect(() => { setFilter(document.getElementById("type").value) }, [filter])


    return (
        <div className='flex flex-row justify-between items-center dark:bg-gray-800 dark:text-gray-200'>
            <div className=' ml-6 ' >
                <h3 className=' text-3xl max-420:text-xl font-semibold '>Find the best food</h3>

                <div className='   sm:flex flex-col gap-1 text-xs  justify-around lg:flex-row  lg:text-xl scroll-smooth  items-center'>
                    <div className={`  flex my-5 flex-wrap lg:gap-3 sm:justify-start font-bold items-center justify-start md:justify-start  `}>

                        <button onClick={() => dispatch(setCategory("All"))} className={` px-3 py-2 bg-grey-200 font-semibold rounded-lg hover:bg-green-500 hover:text-white ${selectedCategory == category && "bg-green-500 text-white"}`}>
                            All
                        </button>

                        {category.map((category, index) => {
                            return <button
                                onClick={() => dispatch(setCategory(category))}
                                key={index} className={`px-3 py-2 bg-grey-200 font-semibold rounded-lg hover:bg-green-500 hover:text-white ' ${selectedCategory == category && "bg-green-500 text-white"}`} >{category}</button>

                        })}

                    </div>
                    {/* <div class="max-420:block hidden w-1/2 max-420:bg-slate-600 "><ul class="bg-white shadow-lg rounded-lg p-2">
                        <li class="p-2 hover:bg-gray-100">Option 1</li>
                        <li class="p-2 hover:bg-gray-100">Option 2</li>
                        <li class="p-2 hover:bg-gray-100">Option 3</li>
                    </ul></div> */}
                    <div className=' flex flex-wrap flex-row items-center text-xs sm:text-xl md:text-xl lg:text-xl dark:bg-gray-800 dark:text-gray-200'>
                        <div className='mx-3 my-2'>
                            <span>Filter by : </span>
                            <select className='  dark:bg-gray-800 dark:text-gray-200 rounded-md' name="cars" value={filter} onChange={handleFilterChange} id="type">
                                <option value="price">Price </option>
                                <option value="rating">Rating </option>

                            </select>

                        </div>
                        <div className='mx-3 my-2'>
                            <span>Order by : </span>
                            <select className='  dark:bg-gray-800 dark:text-gray-200 rounded-md' name="cars" value={order} onChange={handleOrderChange} id="flow">
                                <option value="High_to_Low">High to Low </option>
                                <option value="Low_to_High">Low to High </option>
                            </select>

                        </div>
                        <div className='mx-3 flex items-center my-2 '>
                            <button className=' dark:bg-gray-200 dark:text-gray-800 bg-gray-800 text-gray-200 rounded-md  px-2 py-1'
                                onClick={() => dispatch(darkModeFunction())}>{darkMode ? "White Mode" : "Dark Mode"}</button>
                        </div>

                    </div>


                </div>
            </div>

        </div>
    )
}

export default CategoryMenu