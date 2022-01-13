import { configureStore } from '@reduxjs/toolkit';
import bondReducer from './bond/bondSlice';
import authReducer from './auth/authSlice';

export const store = configureStore({
  reducer: {
    bond: bondReducer,
    auth: authReducer,
  },
});
