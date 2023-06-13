// import { configureStore, combineReducers } from '@reduxjs/toolkit'
// import {
//     persistStore,
//     persistReducer,
//     FLUSH,
//     REHYDRATE,
//     PAUSE,
//     PERSIST,
//     PURGE,
//     REGISTER,
// } from 'redux-persist'
// import storage from 'redux-persist/lib/storage'
// import authReducer from './slice/authSlice'
// import bazarReducer from './slice/bazarSlice'

// const persistConfig = {
//     key: 'root',
//     version: 1,
//     storage,
// }

// const persistedReducer = persistReducer(persistConfig, rootReducer)

// const rootReducer = combineReducers({
//     auth: authReducer,
//     bazar: bazarReducer
// });

// const Store = configureStore({
//     reducer: persistedReducer,
//     middleware: (getDefaultMiddleware) =>
//         getDefaultMiddleware({
//             serializableCheck: {
//                 ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//             },
//         }),
// })

// export default Store;
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from './slice/authSlice';
import bazarReducer from './slice/bazarSlice';

const rootReducer = combineReducers({
    auth: authReducer,
    bazar: bazarReducer
});

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const Store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

const persistor = persistStore(Store);

export { Store, persistor };
