import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Texto } from './components/Header'
import { PurpleSquare } from './components/PurpleSquare'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='body'>
        <Texto />
        <PurpleSquare/>
      </div>
    </>
  )
}

export default App
