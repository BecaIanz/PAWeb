import { useParams } from "react-router-dom"
import "./Profile.css"
export const Profile = () => {
    const { nome } = useParams();
  return(
    <>
        <div className="all">
            <h1>Profile {nome} </h1>
        </div>
    </>
  )
}