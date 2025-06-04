const apiURL = "https://rickandmortyapi.com/api/character"

export const fetchMultipleCharacters = () => {
    return fetch(apiURL)
    .then((response) => response.json())
}

export const fetchOneCharacter= (id) => {
    return fetch(`${apiURL}/${id}`)
    .then((response) => response.json())
}