import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './features/products/bookSlice';

const store = configureStore({
     reducer: {
          produc: bookReducer,
     },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;