import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isActive: false
}

export const navSlice = createSlice({
    name: 'navbar',
    initialState,
    reducers: {
        toggle: (state)=> {
            state.isActive = !state.isActive
        }
    }
});

export const {toggle} = navSlice.actions

export default navSlice.reducer
