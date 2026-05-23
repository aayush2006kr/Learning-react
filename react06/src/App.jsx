import React, { useState } from 'react'

const App = () => {
  const [info, setinfo] = useState({name:"aayush",age:200})
  
  function changeKarDo(){
    const newInfo = {...info}
    newInfo.name="muskan"
    newInfo.age=100
    setinfo(newInfo)
    
  }
  return (
    <div>
      <h1> {info.name} , {info.age}</h1>
      <button onClick={changeKarDo}>click</button>
      </div>
  )
}

export default App