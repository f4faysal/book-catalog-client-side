


import { configureStore } from '@reduxjs/toolkit';

import { api } from './api/apiSlice';
import bookReducer from './features/book/bookSlice';
import avoriteReducer from './features/favorite/favoriteSlice';
import userReducer from './features/user/userSlice';
import wishlistReducer from './features/wishlist/wishlistSlice';

const store = configureStore({
     reducer: {
          books: bookReducer,
          wishlist: wishlistReducer,
          currentlyReading: avoriteReducer,
          user: userReducer,
          [api.reducerPath]: api.reducer,
     },
     middleware: (getDefaultMiddleware) =>
          getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
