import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import SarchAndFilterNav from "../components/SarchAndFilterNav";
import { Card } from "../components/ui/Card";
import Loding from "../components/ui/Loding";
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
  // const FilterData = { genre: "", publicationDate: " " };
  const dispatch = useAppDispatch();

  // Fetch books data
  const { data, isLoading } = useGetBooksQuery(limitation, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 10000,
  });

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

  const onSubmit = (data: LoginFormInputs) => {
    console.log(searchQuery);
    setSearchQuery(data?.search);
  };
  const { books } = useAppSelector((state: any) => state.books);
  const total = books?.length;
  console.log(books, total);
  if (isLoading) {
    return <Loding />;
  }

  return (
    <main className="min-h-screen">
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
