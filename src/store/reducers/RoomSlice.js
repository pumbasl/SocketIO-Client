import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    roomId: '',
    error: '',
    url: '',
    check: undefined,
    isLoading: false
};

export const RoomSlice = createSlice({
    name: 'createRoom',
    initialState,
    reducers: {
        createRoom(state) {
            state.isLoading = true;
        },

        createRoomSuccess(state, action){
            state.roomId = action.payload;
            state.error = '';
            state.isLoading = false;
        },

        createRoomFail(state, action){
            state.error = action.payload;
            state.isLoading = false;
        },

        checkRoom(state, action){
            state.check = action.payload;
        },

        setUrlInRoom(state, action){
            state.url = action.payload;
        }
    }
});

export default RoomSlice.reducer;