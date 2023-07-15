// import { useEffect } from 'react';
// import { useGetBooksQuery } from "../features/book/bookApi";
// import { getBooksFailure, getBooksStart, getBooksSuccess } from "../features/book/bookSlice";
// import { useAppDispatch, useAppSelector } from "../hook";

// const limitation = { pag: 1, limit: 50 };
// const searchData = "";
// const FilterData = { genre: "", publicationDate: " " };
// const dispatch = useAppDispatch();

// // Fetch books data
// const { data, isLoading, error } = useGetBooksQuery(limitation);

// // Update Redux state with fetched data
// useEffect(() => {
//      if (data) {
//           dispatch(getBooksStart());
//           if (data.success) {
//                dispatch(getBooksSuccess(data.data));
//           } else {
//                dispatch(getBooksFailure(data.error));
//           }
//      }
// }, [data, dispatch]);

// // const {
// //   data: searchData,
// //   isError,
// //   isLoading: isSearchLoading,
// // } = useGetSearchBooksQuery(searchData);

// const booksData = useAppSelector((state) => state.books.books);
// console.log(booksData);