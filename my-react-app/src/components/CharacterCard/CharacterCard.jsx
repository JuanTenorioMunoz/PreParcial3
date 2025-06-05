import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { deleteCharacter } from "../../store/stateSlice/StateSlice"

const CharacterCard = ({name, species, image, id}) => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const userType = useSelector((state) => state.user.type)
    const onEditClick = (id) => {
        console.log("eidt", id)
        navigate(`edit/${id}`)
        
    }

    const onDeleteClick = () => {
        dispatch(deleteCharacter(id))
        console.log("delete")
    }


    return(
        <>
            <h1>{name}</h1>
            <h2>{species}</h2>
            <img src={image}></img>
            {userType == "admin" && (
                <>
                    <button onClick={() => onEditClick(id)}>Edit</button>
                    <button onClick={() => onDeleteClick(id)}>delete</button>
                </>
            )
            }
        </>
    )
}

export default CharacterCard