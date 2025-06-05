import { configureStore } from "@reduxjs/toolkit";
import StateReducer from './stateSlice/StateSlice'
import UserReducer from './userSlice/UserSlice'

export const store = configureStore({
    reducer: {
        state: StateReducer,
        user: UserReducer,
    }
})