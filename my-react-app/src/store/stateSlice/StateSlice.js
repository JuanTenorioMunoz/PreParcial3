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
        }
    }
})

export const {setSearchQuery, setApiCharacters} = stateSlice.actions;
export default stateSlice.reducer;