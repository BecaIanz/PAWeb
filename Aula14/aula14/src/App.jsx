import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {

  const [dog, setDog] = useState({});
  const [cat, setCat] = useState([]);
  const [isCat, setIsCat] = useState(false);
  const [isDog, setIsDog] = useState(false);


  // useEffect(() =>{
  //   getDog();
  //   getCat();
  // },[])
  // .

  const getCat = async () => {
    const response = await axios.get('https://api.thecatapi.com/v1/images/search');
    console.log(response.data[0].url);
    setIsCat(true);
    setIsDog(false);
    setCat(response.data[0].url);
  }
  const getDog = async () => {
    const response = await axios.get('https://dog.ceo/api/breeds/image/random');
    console.log(response.data);
    setIsDog(true);
    setIsCat(false);
    setDog(response.data.message);
  }

  return (
    <div className='all'>
      <div className='header'>
        Cachorrinhos 
      </div>
        <h1>Você deseja ver um gato ou um cachorro?</h1>
        <div className='button-group'>
          <button className='button' onClick={getDog}>Cachorro</button>
          <button className='button' onClick={getCat}>Gato</button>
        </div>
      {
        isCat ? <img src={cat} alt="gatinho sumiu" /> : <div className='header'/>
      }
      {
        isDog ? <img src={dog} alt="cachorrinho sumiu" /> : <div className='header'/>
      }
      
    </div>
  )
}

export default App
