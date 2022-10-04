import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    padding: 5px;
`;

export const Texto = styled.Text`
    color: 'FF0000';
`;

export const Botao = styled.Button``;

export const AddButton = styled.TouchableHighlight`
    margin-right: 15px;
`;

export const AddButtonIcon = styled.Image`
    width: 24px;
    height: 24px;
`;

export const NotesList = styled.FlatList`
    flex: 1;
    width: 100%;
`;

export const NoNotes = styled.View`
    justify-content: center;
    align-items: center;
`;

export const NoNotesImage = styled.Image`
    width: 48px;
    height: 48px;
    margin-bottom: 10px;
`;

export const NoNotesText = styled.Text`
    font-size: 20px;
    color: '#FFF';
`;
