import React from 'react';
import 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/lib/integration/react';
import {Text} from 'react-native';

import {store, persistor} from './src/store';

export default function App() {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <Text>Hello</Text>
            </PersistGate>
        </Provider>
    );
}
