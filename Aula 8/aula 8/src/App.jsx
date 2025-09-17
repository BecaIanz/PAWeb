import { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Home } from './pages/Home'
import { Profile } from './pages/Profle'
import { Sobre } from './pages/Sobre'
import { Login } from './pages/Login'



function App() {

  return (
    <>
      <BrowserRouter>
      <nav className='nav'>
        <p>Minha Aplicação</p>
      </nav>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/sobre' element={<Sobre />}></Route>
        <Route path='/profile/:nome' element={<Profile/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
      </Routes>
      </BrowserRouter>
    </>
  )
  //Primeira Parte da aula
  // const [num, setNum] = useState(0)

  // useEffect(() => {
  //   console.log(`mudou para ${num}`)
  // },[num])
  // return (
  //   <>
  //   <div className='all'>
  //     <button className='button' onClick={() => setNum((num) => num + 1)}>Clique Aqui </button>
  //     <h2>{num}</h2>
  //   </div>
      
  //   </>
  // )
}

export default App
