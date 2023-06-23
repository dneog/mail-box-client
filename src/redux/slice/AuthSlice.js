import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isLoggedIn: false,
    email: null,
    userID: null,
    userName: null
}

const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    ADD_ACTIVE_USER(state, action){
       state.email= action.payload.email
       state.userID= action.payload.userID
       state.userName= action.payload.userName
       state.isLoggedIn= true
    },
    REMOVE_ACTIVE_USER(state, action){
        state.email= null
        state.userID= null
        state.userName=null
        state.isLoggedIn= false
    }

  }
});

export const {ADD_ACTIVE_USER, REMOVE_ACTIVE_USER} = AuthSlice.actions

export const selectIsLoggedIn= (state)=> state.auth.isLoggedIn;
export const selectEmail= (state)=> state.auth.email;
export const selectUserName= (state)=> state.auth.userName;
export const selectUserID= (state)=> state.auth.userID;

export default AuthSlice.reducer