import { configureStore } from '@reduxjs/toolkit';
import todosSlice from './slices/todos';
import filterSlice from './slices/filterSlice';
export const store = configureStore({
  reducer: {
    [todosSlice.name]: todosSlice.reducer,
    [filterSlice.name]: filterSlice.reducer
  }
});
