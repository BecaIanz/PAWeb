import { useParams } from "react-router-dom"

export const Product = () => {

    const { category } = useParams();
    const { id } = useParams();

    return(
        <h1>Categoria: {category} - Id Produto: {id} </h1>
    )
}