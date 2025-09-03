import { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
function Home() {
  return(
    <h1>Pagina Inicial</h1>
  )
}
function Sobre() {
  return(
    <h1>Sobre a Aplicação</h1>
  )
}

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/sobre' element={<Sobre></Sobre>}></Route>
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
