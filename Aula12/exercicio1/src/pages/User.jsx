import { useParams } from "react-router-dom"

export const User = () => {

    const { id } = useParams();

    return(
    <>
        <div className="all">
            <h1>Profile {id} </h1>
        </div>
    </>
  )
}