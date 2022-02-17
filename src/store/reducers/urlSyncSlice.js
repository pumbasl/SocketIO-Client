import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    url: '',
    error: ''
};

export const urlSlice = createSlice({
    name: 'url',
    initialState,
    reducers: {
        urlSync(state, action) {
            state.url = action.payload;
            state.error = '';
        },

        urlError(state, action){
            state.error = action.payload
        }
    }
});

export default urlSlice.reducer;