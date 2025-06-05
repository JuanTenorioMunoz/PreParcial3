import { createSlice } from "@reduxjs/toolkit";
import { act, useReducer } from "react";

const initialState = {
    type: "admin"
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUserType: (state, action) => {
            state.type = action.payload;
        }
    }
})

export const {setUserType} = userSlice.actions
export default userSlice.reducer