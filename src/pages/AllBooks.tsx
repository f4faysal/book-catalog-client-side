import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import SarchAndFilterNav from "../components/SarchAndFilterNav";
import { Card } from "../components/ui/Card";
import { useGetBooksQuery } from "../redux/features/book/bookApi";
import {
  getBooksFailure,
  getBooksStart,
  getBooksSuccess,
} from "../redux/features/book/bookSlice";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { IBook, LoginFormInputs } from "../types/globalTypes";

export default function AllBooks() {
  const { register, handleSubmit } = useForm();
  const [searchQuery, setSearchQuery] = useState("");
  const limitation = { pag: 1, limit: 50, searchTerm: searchQuery };
  const FilterData = { genre: "", publicationDate: " " };
  const dispatch = useAppDispatch();

  // Fetch books data
  const { data, isLoading } = useGetBooksQuery(limitation);

  // Fetch search results based on searchQuery
  // const { data: searchData, isLoading: isSearchLoading } =
  //   useGetSearchBooksQuery(searchQuery);

  // Update Redux state with fetched data
  useEffect(() => {
    if (data) {
      dispatch(getBooksStart());
      console.log("total ->", data);
      if (data.success) {
        dispatch(getBooksSuccess(data.data));
      } else {
        dispatch(getBooksFailure(data.error));
      }
    }
  }, [data, dispatch, searchQuery]);

  // const {
  //   data: searchData,
  //   isError,
  //   isLoading: isSearchLoading,
  // } = useGetSearchBooksQuery(searchData);

  const onSubmit = (data: LoginFormInputs) => {
    console.log(searchQuery);
    setSearchQuery(data.search);
  };

  // const handleFilter = (genre, publicationYear) => {
  //   console.log(genre, publicationYear);
  // };

  const { books } = useAppSelector((state) => state.books);
  const total = books?.length;
  console.log(books, total);
  if (isLoading) {
    return <>Loding.....</>;
  }
  return (
    <main>
      <header>
        <SarchAndFilterNav
          total={total}
          handleSubmit={handleSubmit}
          register={register}
          onSubmit={onSubmit}
        />
      </header>
      <section>
        <div className="container mx-auto grid grid-cols-4 gap-2 my-4">
          {books?.map((book: IBook, i: number) => (
            <Card book={book} key={i} />
          ))}
        </div>
      </section>
    </main>
  );
}
