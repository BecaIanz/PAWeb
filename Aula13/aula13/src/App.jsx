import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* Treino
      <div className='h-screen w-screen flex justify-start items-center text-fuchsia-200 text-6xl bg-gray-2 00 flex-col gap-10'>
        <div className='h-52 w-screen bg-fuchsia-950 flex justify-center items-center'>
          <p>Hello World!!</p>
        </div>
      </div> */}

      <div className='h-screen gap-20 w-screen flex justify-start items-center flex-col'>
        {/* Primeira linha */}
        <div className='h-1/3 w-screen flex justify-between items-center'>
          {/* Primeiro Quadrado */}
          <div className='h-full w-60 bg-cyan-600 flex justify-center items-center flex-col'>

            <div className='h-1/3 w-60 flex justify-center items-center'>
              <div className='h-full w-1/3 bg-amber-200'></div>
            </div>

            <div className='h-1/3 w-60 flex justify-center items-center'></div>

            <div className='h-1/3 w-60 flex justify-center items-center'>
              <div className='h-full w-1/3 bg-amber-200'>
            </div>

            </div>
          </div>
          {/* Segundo Quadrado */}
          <div className='h-full w-60 bg-cyan-600 flex justify-center items-center flex-col'>

            <div className='h-1/3 w-60 flex justify-center items-center'></div>

            <div className='h-1/3 w-60 flex justify-center items-center'>
              <div className='h-full w-1/3 bg-amber-200'></div>
            </div>

            <div className='h-1/3 w-60 flex justify-center items-center'></div>
          </div>
          
          {/* Terceiro Quadrado */}
          <div className='h-full w-60 bg-cyan-600 flex justify-center items-center flex-col'>

            <div className='h-1/3 w-60 flex justify-start items-center'>
              <div className='h-full w-1/3 bg-amber-200'></div>
            </div>

            <div className='h-1/3 w-60 flex justify-center items-center'></div>

            <div className='h-1/3 w-60 flex justify-end items-center'>
              <div className='h-full w-1/3 bg-amber-200'>
            </div>

            </div>
          </div>
          {/* Quarto Quadrado */}
          <div className='h-full w-60 bg-cyan-600 flex justify-center items-center flex-col'>

            <div className='h-1/3 w-60 flex justify-center items-center'></div>

            <div className='h-1/3 w-60 flex justify-center items-center'></div>

            <div className='h-1/3 w-60 flex justify-center items-center'>
              <div className='h-full w-1/3 bg-amber-200'></div>
            </div>

          </div>
        </div>
        {/* Segunda linha */}
        <div className='h-1/3 w-screen flex justify-between items-center'>
          {/* Primeiro Quadrado */}
          <div className='h-full w-60 bg-cyan-600 flex justify-center items-center flex-col'>

              <div className='h-1/3 w-60 flex justify-center items-center'>
                <div className='h-full w-1/3 bg-amber-200'></div>
              </div>

              <div className='h-1/3 w-60 flex justify-center items-center'></div>

              <div className='h-1/3 w-60 flex justify-center items-center'></div>
            </div>
            {/* Segundo Quadrado */}
            <div className='h-full w-60 bg-cyan-600 flex justify-center items-center flex-col'>

              <div className='h-1/3 w-60 flex justify-center items-center'>
                <div className='h-full w-1/3 bg-amber-200'></div>
              </div>

              <div className='h-1/3 w-60 flex justify-between items-center'>
                <div className='h-full w-1/3 bg-amber-200'></div>
                <div className='h-full w-1/3 bg-amber-200'></div>
              </div>

              <div className='h-1/3 w-60 flex justify-center items-center'>
                <div className='h-full w-1/3 bg-amber-200'></div>
              </div>
            </div>
            
            {/* Terceiro Quadrado */}
            <div className='h-full w-60 bg-cyan-600 flex justify-center items-center flex-col'>

              <div className='h-1/3 w-60 flex justify-center items-center'>
                <div className=' h-full w-1/3 bg-amber-200'></div>
              </div>

              <div className='h-1/4 w-60 flex justify-center items-center'>
              </div>

              <div className='h-1/3 w-60 flex justify-end items-center'></div>
          </div>
        </div>
        <div className='h-1/3 w-screen flex justify-between items-center'>
          {/* Terceiro Quadrado */}
          <div className='h-full w-60 bg-cyan-600 flex justify-center items-center flex-col'>

            <div className='h-1/3 w-60 flex justify-end items-center'>
              <div className='h-full w-1/3 bg-amber-200'></div>
            </div>

            <div className='h-1/3 w-60 flex justify-center items-center'></div>

            <div className='h-1/3 w-60 flex justify-start items-center'>
              <div className='h-full w-1/3 bg-amber-200'></div>
            </div>
          </div>

          {/* Segundo Quadrado */}
          <div className='h-full w-60 bg-cyan-600 flex justify-center items-center flex-col'>

            <div className='h-1/3 w-60 flex justify-center items-center'></div>

            <div className='h-1/3 w-60 flex justify-center items-center'>
              <div className='h-full w-1/3 bg-amber-200'></div>
            </div>

            <div className='h-1/3 w-60 flex justify-center items-center'></div>
          </div>

          {/* Terceiro Quadrado */}
          <div className='h-full w-60 bg-cyan-600 flex justify-center items-center flex-col'>

            <div className='h-1/3 w-60 flex justify-end items-center'>
              <div className='h-full w-1/3 bg-amber-200'></div>
            </div>

            <div className='h-1/3 w-60 flex justify-center items-center'></div>

            <div className='h-1/3 w-60 flex justify-start items-center'></div>
          </div>
        </div>
      </div>

        
    </>
  )
}

export default App
