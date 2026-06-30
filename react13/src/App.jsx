import React from 'react'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
import Men from './pages/Men'
import Women from './pages/Women'
import Course from './pages/Course'
import CourseDet from './pages/CourseDet'
import Navbar2 from './components/Navbar2'


const App = () => {
  return (
    <div>
      <Navbar/>
      <Navbar2/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/course' element={<Course/>} />
        <Route path='/course/:id' element={<CourseDet/>} />
        <Route path='/product' element={<Product/>}>
        <Route path='men' element={<Men/>} />
        <Route path='women' element={<Women/>} />
        </Route>
      </Routes>
    </div>
  )
}

export default App