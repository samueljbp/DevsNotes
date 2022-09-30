import {combineReducers} from '@reduxjs/toolkit';
import NotesReducer from './NotesReducer';

export default combineReducers({
    notes: NotesReducer,
});
