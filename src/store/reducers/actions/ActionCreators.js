import io from 'socket.io-client';
import { RoomSlice } from '../RoomSlice';

const SERVER_URL = process.env.ws;

const socket = io(SERVER_URL);

export const setUrlInRoom = (url) => {
    return async (dispatch) => {
        socket.emit('room:newUrl', url);
        dispatch(RoomSlice.actions.setUrlInRoom(url));
    };
};

export const checkRoom = (id) => {
    return async (dispatch) => {
        socket.emit('room:check', id);

        socket.on('room:checkAnswer', (data) => {
            dispatch(RoomSlice.actions.checkRoom(data.code));
            dispatch(RoomSlice.actions.setUrlInRoom(data.url));

            if(data.code) dispatch(RoomSlice.actions.createRoomSuccess(id));
        });
    };
};

export const createRoom = () => {
    return async (dispatch) => {
        try {
            socket.emit('room:create');
            dispatch(RoomSlice.actions.createRoom());

            socket.on('room:createSuccsess', (roomId) => {
                dispatch(RoomSlice.actions.createRoomSuccess(roomId));
            });
        } catch (e) {
            dispatch(RoomSlice.actions.createRoomFail(e.message));
        }
    }
};