import { use, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [view, setView] = useState(false)
  const [changeColor, setChangeColor] = useState(true)

  const [count, setCount] = useState(0)
  const [decCount, setDecCount] = useState(0)

  const [name, setName] = useState("")
  const [Changename, setChangeName] = useState(false)


  const contarCliques = () =>
  {
    setCount((count) => count = count + 1) 
    if(count % 10 === 0)
    {
      setDecCount((decCount) => decCount = decCount + 1);
    }
  }

  return (
    <>


    <div className='body'>
      <div className='column'>
        <div className='square1'>
          <button className='button' onClick={() => setView((view) => !view)}>Clique para alterar a visibilidade</button>
          {
            view && <div className='text'>FOI</div>
          }
        </div>

        <div className='square2'  style={{ backgroundColor: changeColor ? 'rgb(93, 26, 124)' : 'rgb(165, 48, 78)' }}>
           <button className='button' onClick={() => setChangeColor((changeColor) => !changeColor)}>Clique para mudar o fundo</button>
        </div>
      </div>
      <div className='column'>

        <div className='square3'>
           <button className='button' onClick={contarCliques}>Clique 10 vezes para somar 1</button>
           <div>
              Contador : {decCount}
           </div>
        </div>
        <div className='square4'>
          <input className='input' onChange={(c) => setName(c.target.value)}></input>
          <button className='button-input' onClick={() => setChangeName(true)}>Confirmar</button>
          {
            Changename && <div className='text-name'>Bem-Vindo {name}</div> 
          }
        </div>
      </div>

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
