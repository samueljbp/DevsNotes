import React from 'react';
import {Box, Title} from './styles';
import {Text} from 'react-native';

export default ({data, index, onPress}) => {
    return (
        <Box onPress={() => onPress(index)}>
            <Title style={{color: '#FFF'}}>{data.title}</Title>
        </Box>
    );
};
