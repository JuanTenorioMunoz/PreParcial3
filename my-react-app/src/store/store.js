import { configureStore } from "@reduxjs/toolkit";
import StateReducer from './stateSlice/StateSlice'

export const store = configureStore({
    reducer: {
        state: StateReducer,
    }
})