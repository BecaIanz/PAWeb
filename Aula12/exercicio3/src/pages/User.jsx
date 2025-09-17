import { useParams, Link } from "react-router-dom"

export const User = () => {

    const { id } = useParams();
    const users = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    // if(id === 1)
    // {
    //     return(
    //         <>
    //             <h1>Bem-Vindo</h1>
    //             <h2>Perfil de Administrador</h2>
    //         </>
    //     )
    // }
    // else {

    users.forEach(user => {
        return (
            <Link to={`/user/${id}`}>Link {i}</Link>
        )  
    });

    return (
        <h2>Usuário não Encontrado</h2>
    )
    // }
}