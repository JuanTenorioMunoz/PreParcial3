

const Form = ({name, species, image}) => {
    return(
        <>
            <input></input>
            <input></input>
            <div>
                <h1>{name}</h1>
                <h2>{species}</h2>
                <img src={image}></img>
            </div>
            <button></button>
        </>
    )
}

export default Form