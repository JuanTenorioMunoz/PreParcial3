import { useEffect, useState } from "react"
import CharacterCard from "../../components/CharacterCard/CharacterCard"
import { useDispatch, useSelector } from "react-redux"
import { setApiCharacters, setSearchQuery } from "../../store/stateSlice/StateSlice";
import { fetchMultipleCharacters } from "../../services/apiFetch";

const List = () => {

    const dispatch = useDispatch();
    const characters = useSelector((state) => state.state.apiCharacters);
    const query = useSelector((state) => state.state.searchQuery)
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getCharacters = async () => {
            const characters = await fetchMultipleCharacters()
            dispatch(setApiCharacters(characters.results))
            setLoading(false)
        }
        getCharacters();
    },[dispatch])

    const setQuery = (e) => {
        dispatch(setSearchQuery(e.target.value))
        console.log(query)
    }

    return(
        <>
            <input onChange={(e) => setQuery(e)}></input>

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