import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { User } from './pages/User'
import { UserPage } from './pages/UserPage'
import { Home } from './pages/Home'

function App() {

  return (
    <>
      <BrowserRouter >
      <Routes >
        <Route path='/' element={<Home/>}></Route>
        <Route path='/userlist' element={<User/>} ></Route>
        <Route path='/userlist/:id' element={<UserPage/>} ></Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
