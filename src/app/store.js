import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import starReducer from '../features/startSlice';
import endReducer from '../features/endSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    start: starReducer,
    end: endReducer,
  },
});
