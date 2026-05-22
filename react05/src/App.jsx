import React from 'react'

const App = () => {
  function btnclick(val){
    console.log("click hua ha ", val)
  }
  return (
    <div>
      <button onClick={(elem)=>{
       btnclick(elem.clientX)
      }} >
        click here 
      </button>
    </div>
  )
}

export default App