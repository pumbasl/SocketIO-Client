import { combineReducers } from '@reduxjs/toolkit';
import urlSyncReducer from './urlSyncSlice';
import RoomReducer from './RoomSlice';

export const rootReducer = combineReducers({
    urlSyncReducer,
    RoomReducer
});