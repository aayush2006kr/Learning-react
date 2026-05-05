import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './components/card'
import Navbar from './components/navbar'



function App() {
  return (
    <div>
      <Card/>
       <Card/>
        <Navbar/>
    </div>
  )
}

export default App
