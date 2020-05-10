import reducers from './reducers';
import {persistReducer, persistStore} from 'redux-persist';
import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';
import AsyncStorage from '@react-native-community/async-storage';

const persistConfig = {
  timeout: 0,
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['user'],
  // blacklist: ['favourites']
};

const persistedReducer = persistReducer(persistConfig, reducers);
const middleware = [thunk, createLogger()];

const store = createStore(persistedReducer, applyMiddleware(...middleware));

const persistor = persistStore(store);

export {store, persistor};
