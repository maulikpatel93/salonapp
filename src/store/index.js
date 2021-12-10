import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import authReducer from "./slices/auth";
import messageReducer from "./slices/message";

const reducer = combineReducers({
  auth: authReducer,
  message: messageReducer,
});
export const store = configureStore({
  reducer,
  devTools: true,
});