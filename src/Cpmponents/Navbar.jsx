import React from 'react'
import { useDispatch } from 'react-redux'
import { setSearch } from '../redux/slices/searchSlice'

function Navbar() {
  const dispatch = useDispatch()
  return (
    <>
    <nav className='flex flex-col lg:flex-row py-3 justify-between w-full dark:bg-gray-800 dark:text-gray-200  '>
        <div className='text-xl px-3 mx-2 font-bold'>
            <h3>{new Date().toUTCString().slice(0,16)}</h3>
        <h1 className="text-2xl  font-bold">Flavaro Foods</h1>
        </div>
        <div className=''>
            <input  type='search' name='search' onChange={(event)=>dispatch(setSearch(event.target.value))} className='p-3 border border-gray-400  dark:bg-gray-700 dark:text-gray-200 w-full mx-2 lg:w-[25vw]' placeholder='Search here' id='' autoComplete='off' />
        </div>
    </nav>
    </> 
  )
}

export default Navbar