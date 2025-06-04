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
        }
    }
})

export const {setSearchQuery, setApiCharacters, setEditingCharacter} = stateSlice.actions;
export default stateSlice.reducer;