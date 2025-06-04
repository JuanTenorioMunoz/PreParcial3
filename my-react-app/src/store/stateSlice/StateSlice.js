import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  apiCharacters: [],
  customCharacters: [],
  editingCharacter: null,
  searchQuery: ''
};

const stateSlice = createSlice({
    name: 'state',
    initialState,
    reducers: {
        setSearchQuery: (state, action) => {
            state.searchQuery = action.payload;
        },
        setApiCharacters: (state, action) => {
            state.apiCharacters = action.payload;
        },
        setEditingCharacter: (state, action) => {
            state.editingCharacter = action.payload;
        },
        deleteCharacter: (state, action) => {
            const characterToDelete = action.payload
            state.apiCharacters = state.apiCharacters.filter(
                (character) => character.id !== characterToDelete
            )
        },
        addCharacterToAPIList: (state, action) => {
            state.apiCharacters = [...state.apiCharacters, action.payload]
        }
    }
})

export const {addCharacterToAPIList,setSearchQuery, setApiCharacters, setEditingCharacter, deleteCharacter} = stateSlice.actions;
export default stateSlice.reducer;