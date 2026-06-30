import React from 'react'
import { useParams } from 'react-router-dom';

const CourseDet = () => {

    let param  =useParams()
    
    
  return (
    <div><h1 className='text-6xl font-bold text-center p-5'>{param.id} Course Details</h1></div>
  )
}

export default CourseDet