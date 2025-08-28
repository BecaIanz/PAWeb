import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [view, setView] = useState(false)
  const [chageColor, setChageColor] = useState("")

  return (
    <>


    <div className='body'>
      <div className='row'>

        <div className='square1'>
          <button className='button' onClick={() => setView((view) => !view)}>Clique para o texto aparecer</button>
          {
            view == true && <div className='text'>FOI</div>
          }
        </div>

        <div className='square2'>
          <button id='button2' className='button2' onClick={(c) => setChageColor(c.target.value)}>Clique para mudar o fundo</button>
        </div>

      </div>

      <div className='row'></div>
    </div>
    {/* <button onClick={() => setCount((count) => count + 1)}>
        Você clicou {count} vezes!
      </button>
      <input type='text' onChange={(e) => setTexto(e.target.value)}/>
      <h1>{texto}</h1> */}
    </>
  )
}

export default App
