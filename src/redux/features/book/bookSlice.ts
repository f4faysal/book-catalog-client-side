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







// import { createSlice } from '@reduxjs/toolkit';
// import type { PayloadAction } from '@reduxjs/toolkit';

// interface IProduct {
//   status: boolean;
//   priceRange: number;
// }

// const initialState: IProduct = {
//   status: false,
//   priceRange: 150,
// };

// const productSlice = createSlice({
//   name: 'product',
//   initialState,
//   reducers: {
//     toggleState: (state) => {
//       state.status = !state.status;
//     },
//     setPriceRange: (state, action: PayloadAction<number>) => {
//       state.priceRange = action.payload;
//     },
//   },
// });

// export const { toggleState, setPriceRange } = productSlice.actions;

// export default productSlice.reducer;
