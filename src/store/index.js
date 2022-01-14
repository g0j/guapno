import { configureStore } from '@reduxjs/toolkit';
import bondReducer from './bond/bondSlice';
import messageReducer from './message/messageSlice';

export const store = configureStore({
  reducer: {
    bond: bondReducer,
    message: messageReducer,
  },
});
