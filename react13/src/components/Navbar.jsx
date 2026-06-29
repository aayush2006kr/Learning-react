import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center p-5 bg-gray-400'>
        <div>
            <h1 className='text-xl font-bold'>Routing</h1>
        </div>
        <div className='flex gap-5'>
            <Link to='/' className='text-lg font-semibold'>Home</Link>
            <Link to='/about' className='text-lg font-semibold'>About</Link>
            <Link to='/product' className='text-lg font-semibold'>Product</Link>
        </div>
    </div>
  )
}

export default Navbar