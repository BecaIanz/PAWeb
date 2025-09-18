import { useParams, Link } from "react-router-dom"
import './User.css'

export const User = () => {

    const { id } = useParams();
    const users = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    if(id === 1)
    {
        return(
            <>
                <h1>Bem-Vindo</h1>
                <h2>Perfil de Administrador</h2>
            </>
        )
    }
    else {
        return (
            <div className="all">
                <Link className="link" to={'/'}>Voltar</Link>
                <h2>Lista de Usuários</h2>
                <ul>
                    {users.map((id) => (
                        <li className="dot-link" key={id}>
                            <Link className="link" to={`/userlist/${id}`}>Usuário {id}</Link>
                            
                        </li>
                    ))}
                </ul>
            
            </div>
        )
    }
}