import { useEffect, useState } from "react"
import CharacterCard from "../../components/CharacterCard/CharacterCard"
import { useDispatch, useSelector } from "react-redux"
import { setApiCharacters } from "../../store/stateSlice/StateSlice";
import { fetchMultipleCharacters } from "../../services/apiFetch";

const List = () => {

    const dispatch = useDispatch();
    const characters = useSelector((state) => state.state.apiCharacters);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getCharacters = async () => {
            const characters = await fetchMultipleCharacters()
            dispatch(setApiCharacters(characters.results))
            setLoading(false)
        }
        getCharacters();
    },[dispatch])

    return(
        <>
            {characters.map((character) => (
            <CharacterCard 
            name={character.name}
            species={character.species}
            image={character.image}
            id={character.id}
            ></CharacterCard>
        ))}
        </>
    )
}

export default List