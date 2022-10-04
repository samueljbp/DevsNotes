import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    list: [
        {
            title: 'Primeira Nota',
            body: 'Testando 1,2,3...',
        },
    ],
};

export const notesSlice = createSlice({
    name: 'notes',
    initialState: initialState,
    reducers: {
        adicionar: (state, action) => {
            state.list.push(action.payload);
        },
        alterar: (state, action) => {
            if (state.list[payload.index]) {
                state.list[payload.index].title = payload.title;
                state.list[payload.index].body = payload.body;
            }
        },
    },
});

export const {adicionar, alterar} = notesSlice.actions;

export default notesSlice.reducer;
