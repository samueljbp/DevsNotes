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
            if (state.list[action.payload.index]) {
                state.list[action.payload.index].title = action.payload.title;
                state.list[action.payload.index].body = action.payload.body;
            }
        },
        excluir: (state, action) => {
            if (state.list[action.payload.index]) {
                state.list.splice(action.payload.index, 1);
            }
        },
    },
});

export const {adicionar, alterar, excluir} = notesSlice.actions;

export default notesSlice.reducer;
