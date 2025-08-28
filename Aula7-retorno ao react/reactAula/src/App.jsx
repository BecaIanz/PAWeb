import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Texto } from './components/Header'
import { PurpleSquare } from './components/PurpleSquare'
import { Square } from './components/Square'
import { BlueSquare } from './components/BlueSquare'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='body'>
        {/* <BlueSquare/>
        <PurpleSquare/> */}
        <Square cor="blue"/>
        <Square cor="purple"/>
        <Square cor="pink"/>
      </div>
    </>
  )
}

export default App
