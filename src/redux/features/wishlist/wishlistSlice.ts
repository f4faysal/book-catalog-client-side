import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IBook } from '../../../types/globalTypes';

interface ICart {
     wishlist: IBook[]
}
const initialState: ICart = {
     wishlist: [],
};

const wishlistSlice = createSlice({
     name: 'wishlist',
     initialState,
     reducers: {
          addToWishlist: (state, action: PayloadAction<IBook>) => {

               const existing = state.wishlist.find(
                    (wishlist) => wishlist?._id === action.payload?._id
               );

               if (existing) {
                    state.wishlist = state.wishlist.filter(
                         (book) => book?._id !== action.payload?._id)
               } else {
                    state.wishlist.push({ ...action.payload });
               }

          },
     }
});

export const {
     addToWishlist
} = wishlistSlice.actions;

export default wishlistSlice.reducer;






