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
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedOptionDate, setselectedOptionDate] = useState("");

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

  const handleSelectChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setSelectedOption(event.target.value);
    console.log(event.target.value);
  };
  const handleSelectChangeDate = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    event.preventDefault();
    setselectedOptionDate(event.target.value);
    console.log(event.target.value);
  };

  let serchAndFilterBook = [];
  let total;
  if (selectedOption.length) {
    serchAndFilterBook = books.filter((b: any) => b.genre === selectedOption);
    total = serchAndFilterBook.length;
  } else if (selectedOptionDate.length) {
    serchAndFilterBook = books.filter(
      (b: any) => b.publicationDate === selectedOptionDate
    );
    total = serchAndFilterBook.length;
  } else {
    serchAndFilterBook = books;
    total = serchAndFilterBook.length;
  }

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
          handleSelectChange={handleSelectChange}
          selectedOption={selectedOption}
          handleSelectChangeDate={handleSelectChangeDate}
          selectedOptionDate={selectedOptionDate}
        />
      </header>
      <section>
        <div className="container mx-auto grid grid-cols-4 gap-2 my-4">
          {serchAndFilterBook?.map((book: IBook, i: number) => (
            <Card book={book} key={i} />
          ))}
        </div>
      </section>
    </main>
  );
}
