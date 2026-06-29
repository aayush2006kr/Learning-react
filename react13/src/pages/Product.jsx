import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Product = () => {
  return (
    <div>
      <div className='flex gap-2justify-center items-center p-5 text-6xl bg-gray-400'>
    <Link to='/product/men' className='text-lg font-semibold'>Men</Link>
    <Link to='/product/women' className='text-lg font-semibold'>Women</Link>
    </div>
     <Outlet />
    </div>
    
  )
}

export default Product