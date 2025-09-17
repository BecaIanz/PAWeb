import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { User } from './pages/User'

function App() {

  return (
    <>
      <BrowserRouter >
      <Routes >
        <Route path='/user' element={<User/>} ></Route>
        <Route path='/user/:id' element={<User/>} ></Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
