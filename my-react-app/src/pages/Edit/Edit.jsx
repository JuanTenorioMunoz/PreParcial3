import { useDispatch, useSelector } from "react-redux"
import CharacterCard from "../../components/CharacterCard/CharacterCard"
import Form from "../../components/Form/Form"
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchOneCharacter } from "../../services/apiFetch";
import { setEditingCharacter } from "../../store/stateSlice/StateSlice";

const Edit = () => {

    const {id} = useParams()
    const dispatch = useDispatch();
    const editableCharacter = useSelector((state) => state.state.editingCharacter)
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate();

    useEffect(()=>{
        const fetchCharacter = async () => {
            const character = await fetchOneCharacter(id);
            dispatch(setEditingCharacter(character))
            setLoading(false)
        }
        fetchCharacter()
    },[dispatch])
    
    return(
        <>
            
            {loading ? (<></>):(
                <Form 
                    name={editableCharacter.name}
                    species={editableCharacter.species}
                    image={editableCharacter.image}
                    id={editableCharacter.id}
                ></Form>)}
            <button onClick={() => navigate("/")}>GO HOME</button>
        </>
    )
}

export default Edit