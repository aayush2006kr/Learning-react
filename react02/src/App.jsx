import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './components/card'


import React from 'react'

const App = () => {
  return (
    <div>
      <Card user="aayushkr" age={20} />
    </div>
  )
}

export default App
