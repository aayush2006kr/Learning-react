import React from 'react'
import axios from 'axios'
import { useState } from 'react'
const App = () => {
  const [dataArr, setData] = useState([])
  const getData = async()=>{
    const response = await axios.get("https://picsum.photos/v2/list")
    
    setData(response.data)
    
  }

  return (
    <div>
      <button onClick={getData}>get data</button>
      <div>
       {dataArr.map(function(elem , idx){

        return <h3>hello , MR {elem.author} {idx+1}</h3>
       })}
      </div>
    </div>

  )
}

export default App