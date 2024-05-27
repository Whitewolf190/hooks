import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './components/Form'
import Counter from './components/Counter'
import Navbar from './components/Navbar'
import { BrowserRouter,Route,Routes } from 'react-router-dom'

function App() {

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
  
    <Route path='/counter'  element={<Counter/>}/>
    <Route path='/form' element={<Form/>} />
 
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
