import { useEffect } from "react"
import CharacterCard from "../../components/CharacterCard/CharacterCard"
import { useDispatch, useSelector } from "react-redux"
import { setApiCharacters } from "../../store/stateSlice/StateSlice";
import { fetchMultipleCharacters } from "../../services/apiFetch";

const List = () => {

    const dispatch = useDispatch();
    const characters = useSelector((state) => state.state.apiCharacters);

    useEffect(() => {
        const getCharacters = async () => {
            const characters = await fetchMultipleCharacters()
            dispatch(setApiCharacters(characters.results))
        }
        getCharacters();

    },[dispatch])

    return(
        <>
        {characters.map((character) => (
            <div key={character.id}>{character.name}</div>
        ))}
        </>
    )
}

export default List