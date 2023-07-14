import { Card } from "../components/ui/Card";
import { useGetBooksQuery } from "../redux/features/book/bookApi";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { IBook } from "../types/globalTypes";

export default function AllBooks() {
  const limitation = { pag: 1, limit: 50 };
  const { data, isLoading, error } = useGetBooksQuery(limitation);

  // const { toast } = useToast();

  const { status } = useAppSelector((state) => state.book);
  console.log("AllBooks", status);

  const dispatch = useAppDispatch();

  const booksData = data?.data;

  console.log(booksData);
  return (
    <div className="container mx-auto grid grid-cols-4 gap-2 my-4">
      {booksData?.map((book: IBook, i: any) => (
        <Card book={book} key={i} />
      ))}
    </div>
  );
}
