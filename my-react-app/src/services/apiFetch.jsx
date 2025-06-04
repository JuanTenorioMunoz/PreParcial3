const apiURL = "https://rickandmortyapi.com/api/character"

export const fetchMultipleCharacters = () => {
    return fetch(apiURL)
    .then((response) => response.json())
}