import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isLoggedIn: false,
    email: null,
    username: null,
    userID: null
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        SET_ACTIVE_USER: (state, action) => {
            console.log(action.payload);
            state.isLoggedIn = true;
            state.email = action.payload.email;
            state.username = action.payload.username;
            state.userID = action.payload.userID;
        },
        REMOVE_ACTIVE_USER : (state) => {
            state.isLoggedIn = false;
            state.email = null;
            state.username = null;
            state.userID = null;
        }
    },
});

export const { SET_ACTIVE_USER , REMOVE_ACTIVE_USER } = authSlice.actions
export const selectIsLoggedIn = (state) => {
    return state.auth.isLoggedIn
}
export const selectEmail = (state) => {
    return state.auth.email
}
export const selectUsername = (state) => {
    return state.auth.username
}
export const selectUserId = (state) => {
    return state.auth.userID
}
export default authSlice.reducer
