import { createSlice } from '@reduxjs/toolkit';

const booksSlice = createSlice({
     name: 'books',
     initialState: {
          books: [],
          isLoading: false,
          error: null,
     },
     reducers: {
          getBooksSuccess: (state, action) => {
               state.books = action.payload;
               state.isLoading = false;
               state.error = null;
          },
          getBooksStart: (state) => {
               state.isLoading = true;
               state.error = null;
          },
          getBooksFailure: (state, action) => {
               state.isLoading = false;
               state.error = action.payload;
          },
     },
});

export const {
     getBooksStart,
     getBooksSuccess,
     getBooksFailure,
} = booksSlice.actions;

export default booksSlice.reducer;






