import React from 'react'
import { Link } from 'react-router-dom'

export default function SuccessfullBuy() {
  return (
    <div >
      <div className='flex justify-center items-center h-screen text-4xl font-bold '>

          Buy Successfully confirm 
      <Link to={"/"}> <button  className='bg-green-600  rounded text-white  font-normal py-1 px-2 '>Home</button></Link>
      </div>
    </div>
  )
}
