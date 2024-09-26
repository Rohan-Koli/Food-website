import React, { useEffect } from 'react'
import {BarLoader} from "react-spinners"
import { useState } from 'react'

function Success() {
  const [loading,setLoading] = useState(true)
  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false)
    },2000)
  },[])
  return (
    <>
    <div className=' flex flex-col h-screen justify-center items-center'>
    {
      loading ? <BarLoader color="#0e1512" /> : 
      <div>
      <h1 className='text-3xl font-semibold mb-4'>Order Successful!!!</h1>
      <p>Your oder is successfully placed </p>
      </div>
    }
    </div>
    </>
  )
}

export default Success