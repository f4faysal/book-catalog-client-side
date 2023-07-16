import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IBook } from '../../../types/globalTypes';

interface ICart {
     favorite: IBook[]
}
const initialState: ICart = {
     favorite: [],
};

const favoriteSlice = createSlice({
     name: 'favorite',
     initialState,
     reducers: {
          addToFavorite: (state, action: PayloadAction<IBook>) => {

               const existing = state.favorite.find(
                    (favorite) => favorite?._id === action.payload?._id
               );

               if (existing) {
                    state.favorite = state.favorite.filter(
                         (book) => book?._id !== action.payload?._id)
               } else {
                    state.favorite.push({ ...action.payload });
               }

          },
     }
});

export const {
     addToFavorite
} = favoriteSlice.actions;

export default favoriteSlice.reducer;






