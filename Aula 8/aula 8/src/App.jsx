import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [num, setNum] = useState(0)

  useEffect(() => {
    console.log(`mudou para ${num}`)
  },[num])
  return (
    <>
    <div className='all'>
      <button className='button' onClick={() => setNum((num) => num + 1)}>Clique Aqui </button>
      <h2>{num}</h2>
    </div>
      
    </>
  )
}

export default App
