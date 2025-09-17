import { useParams } from "react-router-dom"

export const User = () => {

    const { id } = useParams();

    return(
    <>
        <h1>Bem-Vindo</h1>
        {
            id === "1" ? (
                <h2>Perfil de Administrador</h2>
            ) : (
                <h2>Perfil de Usuário</h2>
            )
        }
    </>
  )
}