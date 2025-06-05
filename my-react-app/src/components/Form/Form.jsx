import { useState } from "react"
import { useDispatch } from "react-redux"
import { addCustomCharacter, editCharacter } from "../../store/stateSlice/StateSlice";

const Form = ({name, species, image, id}) => {

    const dispatch = useDispatch();
    const [speciesEdit, setSpeciesEdit] = useState(species)
    const [nameEdit, setNameEdit] = useState(name)
    const character = {
        id:id,
        species: speciesEdit,
        name: nameEdit,
        image: image,
    }


    const changeSpecies = (event) => {
        setSpeciesEdit(event.target.value)
        console.log(speciesEdit)
    }

    const changeName = (event) => {
        setNameEdit(event.target.value)
        console.log(nameEdit)
    }

    const createCustomCharacter = () => {
        dispatch(addCustomCharacter(character))
    }

    const editCustomCharacter = () => {
        dispatch(editCharacter(character))
    }

    return(
        <>
            <input onChange={(e)=>changeSpecies(e)}></input>
            <input onChange={(e)=>changeName(e)}></input>
            <div>
                <h1>{nameEdit}</h1>
                <h2>{speciesEdit}</h2>
                <img src={image}></img>
            </div>
            <button onClick={() => createCustomCharacter()}>create custom</button>
            <button onClick={() => editCustomCharacter()}>edit custom</button>
        </>
    )
}

export default Form