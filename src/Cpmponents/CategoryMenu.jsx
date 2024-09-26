import React, { useEffect, useState } from 'react'
import FoodData from './FoodData'
import { setCategory } from '../redux/slices/categorySlice'
import { useDispatch, useSelector } from "react-redux"
import { setType, setOrderFlow } from '../redux/slices/filterSlice'

function CategoryMenu() {

    const dispatch = useDispatch()
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
        <div className='flex flex-row justify-between  dark:bg-gray-800 dark:text-gray-200'>
            <div className=' ml-6 ' >
                <h3 className=' text-xl font-semibold '>Find the best food</h3>
                <div className=' flex flex-col lg:flex-row items-center'>
                    <div className=' my-5 flex gap-3 overflow-x-scroll font-bold items-center scroll scroll-smooth lg:overflow-x-hidden '>
                        <button onClick={() => dispatch(setCategory("All"))} className={` px-3 py-2 bg-grey-200 font-bold rounded-lg hover:bg-green-500 hover:text-white ${selectedCategory == category && "bg-green-500 text-white"}`}>
                            All
                        </button>

                        {category.map((category, index) => {
                            return <button
                                onClick={() => dispatch(setCategory(category))}
                                key={index} className={`px-3 py-2 bg-grey-200 font-bold rounded-lg hover:bg-green-500 hover:text-white ' ${selectedCategory == category && "bg-green-500 text-white"}`} >{category}</button>

                        })}

                    </div>
                    <div className=' flex flex-row items-center  dark:bg-gray-800 dark:text-gray-200'>
                        <div className='mx-3'>
                            <span>Filter by : </span>
                            <select className='  dark:bg-gray-800 dark:text-gray-200 rounded-md'  name="cars" value={filter} onChange={handleFilterChange} id="type">
                                <option  value="price">Price </option>
                                <option value="rating">Rating </option>

                            </select>
                            
                        </div>
                        <div className='mx-3'>
                            <span>Order by : </span>
                            <select className='  dark:bg-gray-800 dark:text-gray-200 rounded-md' name="cars" value={order} onChange={handleOrderChange} id="flow">
                                <option value="High_to_Low">High to Low </option>
                                <option value="Low_to_High">Low to High </option>
                            </select>
                            
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default CategoryMenu