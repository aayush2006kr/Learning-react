import React from 'react'

const App = () => {

  localStorage.setItem("user","aayush")
  localStorage.setItem("age","21")
  let user = localStorage.getItem("user")
  let age =localStorage.getItem("age")
  console.log(user, age);
  localStorage.removeItem("age")



  const detalis = {
   user: "aayush",
   age: 20,
   city: "patna"
  }

  localStorage.setItem("fullDet",JSON.stringify(detalis))
  let fullDet = JSON.parse(localStorage.getItem("fullDet"))
  console.log(fullDet);
  
  

  return (
    <div>App</div>
  )
}

export default App