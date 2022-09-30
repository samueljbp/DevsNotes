import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    list: {
        title: 'Primeira Nota',
        body: 'Testando 1,2,3...',
    },
};

export const notesSlice = createSlice({
    name: 'notes',
    initialState,
    reducers: {
        adicionar: state => {
            state.list.push({
                title: 'Segunda Nota',
                body: 'Testando 1,2,3...',
            });
        },
    },
});

export const {notes} = notesSlice.actions;

// export const notesSlice = (state = initialState, action) => {
//     switch (action.type) {
//         case 'ADD_NOTE':
//             break;
//     }

//     return state;
// };

export default notesSlice.reducer;
