import { configureStore, combineReducers } from '@reduxjs/toolkit'
import authReducer from './slice/authSlice'
import bazarReducer from './slice/bazarSlice'

const rootReducer = combineReducers({
    auth: authReducer,
    bazar: bazarReducer
});

const Store = configureStore({
    reducer: rootReducer,
})

export default Store;