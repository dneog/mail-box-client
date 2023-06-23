import {configureStore, combineReducers} from '@reduxjs/toolkit';
import authReducer from './slice/AuthSlice';
import blueTickReducer from './slice/BlurTickSlice';
const rootReducers= combineReducers({
    auth: authReducer,
    blueTick: blueTickReducer,
})

const store= configureStore({
    reducer  : rootReducers
   
})

export default store