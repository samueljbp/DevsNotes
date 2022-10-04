import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import ListScreen from '../pages/ListScreen/index';
import EditNoteScreen from '../pages/EditNoteScreen/index';

const MainStack = createStackNavigator();

export default () => (
    <MainStack.Navigator
        initialRouteName="List"
        screenOptions={{
            headerStyle: {
                backgroundColor: '#222',
            },
            headerTintColor: '#FFF',
            cardStyle: {
                backgroundColor: '#333',
            },
        }}>
        <MainStack.Screen name="List" component={ListScreen} />
        <MainStack.Screen name="EditNote" component={EditNoteScreen} />
    </MainStack.Navigator>
);
