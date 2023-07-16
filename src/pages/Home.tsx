import { Card } from "../components/ui/Card";
import { CarouselHome } from "../components/ui/CarouselHome";
import Loding from "../components/ui/Loding";
import { useGetBooksQuery } from "../redux/features/book/bookApi";
import { IBook } from "../types/globalTypes";

export default function Home() {
  const searchTerm = "";
  const limitation = { pag: 1, limit: 10, searchTerm };

  const { data, isLoading } = useGetBooksQuery(limitation, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 30000,
  });
  // const { toast } = useToast();
  // const { status } = useAppSelector((state) => state.book);
  // console.log(status);

  const booksData = data?.data;

  if (isLoading) {
    return <Loding />;
  }

  return (
    <div className="">
      <div className="">
        <CarouselHome />
      </div>
      <div className="container mx-auto grid grid-cols-4 gap-2 my-4">
        {booksData?.map((book: IBook, i: number) => (
          <Card book={book} key={i} />
        ))}
      </div>
    </div>
  );
}
