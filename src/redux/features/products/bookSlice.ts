
import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

interface IBook {
     status: boolean;
     priceRange: number;
     book: string
}

const initialState: IBook = {
     status: false,
     priceRange: 150,
     book: "KGF Chapter 2"

};

const bookSlice = createSlice({
     name: 'book',
     initialState,
     reducers: {
          toggleState: (state) => {
               state.status = !state.status;
          },
          setPriceRange: (state, action: PayloadAction<number>) => {
               state.priceRange = action.payload;
          },
     },
});

export const { toggleState, setPriceRange } = bookSlice.actions;

export default bookSlice.reducer;