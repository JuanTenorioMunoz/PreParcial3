import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"

const CharacterCard = ({name, species, image, id}) => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const onEditClick = (id) => {
        console.log("eidt", id)
        navigate(`edit/${id}`)
        
    }

    const onDeleteClick = () => {
        console.log("delete")
    }


    return(
        <>
            <h1>{name}</h1>
            <h2>{species}</h2>
            <img src={image}></img>
            <button onClick={() => onEditClick(id)}>Edit</button>
            <button onClick={() => onDeleteClick()}>delete</button>
        </>
    )
}

export default CharacterCard