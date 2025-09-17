import { Link, Route, useNavigate } from "react-router-dom"
import "./Home.css"
export const Home = () => {

    const navigate = useNavigate();

  return(
    <>
        <div className="all">
            <h1>Bem-Vindo a Página Inicial</h1>
            <button className="button" onClick={() => navigate('/sobre')}>Sobre</button>
            <button className="button" onClick={() => navigate('/login')}>Perfil</button>
        </div>
    </>
  )
}