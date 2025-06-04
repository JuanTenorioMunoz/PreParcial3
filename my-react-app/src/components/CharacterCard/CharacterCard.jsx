import { useDispatch } from "react-redux"

const CharacterCard = ({name, species, image}) => {

    const dispatch = useDispatch()

    const onEditClick = () => {
        console.log("eidt")
    }

    const onDeleteClick = () => {
        console.log("delete")
    }


    return(
        <>
            <h1>{name}</h1>
            <h2>{species}</h2>
            <img src={image}></img>
            <button onClick={() => onEditClick()}>Edit</button>
            <button onClick={() => onDeleteClick()}>delete</button>
        </>
    )
}

export default CharacterCard