import React from 'react'

const Card = (props) => {
  return (
    <div className='card'>
      <h1>{props.user}</h1>
      <h2>{props.age}</h2>
    </div>
  )
}

export default Card
