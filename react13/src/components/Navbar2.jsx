import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar2 = () => {
    let navigate = useNavigate()
  return (
    <div>
        <div className='flex px-3 py-3 m-2 gap-8'>
            <button 
            className='bg-red-400 px-2 py-3 m-1 font-bold active:scale-95 cursor-pointer'
            onClick={()=>{
                navigate('/')
            }}
            >
                Go to Home
            </button>

            <button 
            className='bg-red-400 px-2 py-3 m-1 font-bold  active:scale-95 cursor-pointer'
            onClick={()=>{
                navigate(-1)
            }}
            >
                Back
            </button>

            <button 
            className='bg-red-400 px-2 py-3 m-1 font-bold  active:scale-95 cursor-pointer'
            onClick={()=>{
                navigate(+1)
            }}
            >
                Next
            </button>
        </div>
    </div>
  )
}

export default Navbar2