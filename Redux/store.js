import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import RegisterReducer from './Reducers/RegisterReducer';
import LoginReducer from './Reducers/LoginReducer';
import systemReducer from './Reducers/systemReducer';
import {configureStore} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistStore, persistReducer} from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: [''],
};

const rootReducer = combineReducers({
  RegisterReducer,
  LoginReducer,
  systemReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

//store
export const store = configureStore({
  reducer: persistedReducer,
  // devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk],
});

export const persistor = persistStore(store);
