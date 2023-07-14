
import { createSlice } from '@reduxjs/toolkit';

interface IBook {
     status: boolean;
     book: string
}

const initialState: IBook = {
     status: false,
     book: "EBook"

};

const bookSlice = createSlice({
     name: 'book',
     initialState,
     reducers: {},
});

// export const {  } = bookSlice.actions;

export default bookSlice.reducer;






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
