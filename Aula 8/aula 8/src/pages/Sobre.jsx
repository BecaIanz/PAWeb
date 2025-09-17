import { Link } from 'react-router-dom'
import './Sobre.css'
import { useNavigate } from 'react-router-dom'

export const Sobre = () => {

    const navigate = useNavigate();

    const handleNavigate = () => {
      console.log("NAvegar");
      navigate('/')
    }

  return(
    <div className='all'>
      <h1>Sobre a Aplicação</h1>
      <button onClick={handleNavigate}>Voltar Para Home</button>
      {/* <Link style={{ color: 'black' }} to={'/'}>Voltar Para Home</Link> */}
    </div>
  )
}