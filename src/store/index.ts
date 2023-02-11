import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from './userReducer';

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage
}

const rootReducer = combineReducers({
    user: persistReducer(persistConfig, userReducer),
})

const store = configureStore({
    reducer: rootReducer
})
const persistor = persistStore(store);


export type RootState = ReturnType<typeof store.getState>
export { store, persistor };

//useSelector((state: RootState) => state.user.seed);