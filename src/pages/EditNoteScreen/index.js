import React, {useState, useEffect, useLayoutEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
    Container,
    TitleInput,
    BodyInput,
    SaveButton,
    SaveButtonImage,
    CloseButton,
    CloseButtonImage,
} from './styles';
import {useRoute, useNavigation} from '@react-navigation/native';
import {adicionar, alterar} from '../../reducers/NotesReducer';

export default () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [status, setStatus] = useState('new');

    const navigation = useNavigation();
    const route = useRoute();
    const dispatch = useDispatch();
    const {list} = useSelector(state => state.notes);

    useEffect(() => {
        if (route.params?.key != undefined && list[route.params.key]) {
            setStatus('edit');
            setTitle(list[route.params.key].title);
            setBody(list[route.params.key].body);
        }
    }, []);

    useLayoutEffect(() => {
        navigation.setOptions({
            title: status == 'new' ? 'Nova anotação' : 'Editar anotação',
            headerRight: () => (
                <SaveButton
                    onPress={handleSaveButton}
                    underlayColor="transparent">
                    <SaveButtonImage
                        source={require('../../assets/save.png')}
                    />
                </SaveButton>
            ),
            headerLeft: () => (
                <CloseButton
                    onPress={handleCloseButton}
                    underlayColor="transparent">
                    <CloseButtonImage
                        source={require('../../assets/close.png')}
                    />
                </CloseButton>
            ),
        });
    }, [status, title, body]);

    const handleSaveButton = () => {
        if (title == '' || body == '') {
            alert('Preencha titulo e corpo');
            return;
        }

        if (status == 'edit') {
            dispatch(
                alterar({
                    title,
                    body,
                    index: route.params.key,
                }),
            );
        } else {
            dispatch(
                adicionar({
                    title: title,
                    body: body,
                }),
            );
            navigation.goBack();
        }
    };

    const handleCloseButton = () => {
        navigation.goBack();
    };

    return (
        <Container>
            <TitleInput
                placeholder="Digite o titulo da anotação"
                placeholderTextColor="#CCC"
                value={title}
                onChangeText={t => setTitle(t)}
                autoFocus={true}
                style={{color: '#FFF'}}
            />
            <BodyInput
                placeholder="Digite o corpo da anotação"
                placeholderTextColor="#CCC"
                multiline={true}
                textAlignVertical="top"
                value={body}
                onChangeText={t => setBody(t)}
                style={{color: '#FFF'}}
            />
        </Container>
    );
};
