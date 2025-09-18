import { useParams, Link } from "react-router-dom"

export const UserPage = () => {
    const { id } = useParams();

    return(
        <div className="all">
            <h1>Pagina do usuário {id}</h1>
            <Link className="link" to={'/userlist'}>Voltar</Link>
        </div>
    )
}