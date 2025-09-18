import { Link } from 'react-router-dom'
import './Home.css'

export const Home = () => {
    return(
        <div className='all'>
            <h1>Bem-Vindo!</h1>
            <h3>Clique abaixo para ir na lista de usuários</h3>
            <Link className='link' to={'/userlist'}>Lista de Usiários</Link>
        </div>
    )
}