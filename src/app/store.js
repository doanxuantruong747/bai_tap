import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './rootReducer';
import rootwatcher from './rootWatcher';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['productReducer', 'myCartReducer']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)


const saga = createSagaMiddleware();
const middleWares = [saga];

const store = createStore(
    persistedReducer,
    applyMiddleware(...middleWares)
)

saga.run(rootwatcher);

export const persistor = persistStore(store);

export default store;