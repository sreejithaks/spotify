import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'


function App() {
  

  return (
    <>
    <Routes>
      <Route path='/' exact element={<Home/>}/>
      <Route path='/Login' exact element={<Login/>}/>
     
    </Routes>
      
    </> 
  )
}

export default App
