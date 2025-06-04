const CharacterCard = ({name, species, image}) => {
    return(
        <>
            <h1>{name}</h1>
            <h2>{species}</h2>
            <img src={image}></img>
        </>
    )
}

export default CharacterCard