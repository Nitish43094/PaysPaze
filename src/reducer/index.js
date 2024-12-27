import { combineReducers } from "@reduxjs/toolkit";
import userReducer from '../store/userSlice'
const rootReducer = combineReducers({
    user:userReducer,
})

export default rootReducer;