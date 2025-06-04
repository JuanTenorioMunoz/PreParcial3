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
        }
    }
})

export const {setSearchQuery} = stateSlice.actions;