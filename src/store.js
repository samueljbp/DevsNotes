import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import hardSet from 'redux-persist/lib/stateReconciler/hardSet';
import rootReducer from './reducers/index';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    stateReconciler: hardSet,
};

const pReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: pReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({serializableCheck: false}),
});
export const persistor = persistStore(store);
