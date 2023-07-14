import { Card } from "../components/ui/Card";
import { CarouselHome } from "../components/ui/CarouselHome";
import { useGetBooksQuery } from "../redux/features/book/bookApi";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { IBook } from "../types/globalTypes";

export default function Home() {
  const { data, isLoading, error } = useGetBooksQuery(undefined);

  // const { toast } = useToast();
  console.log(data.data);
  const { status } = useAppSelector((state) => state.book);
  console.log(status);

  const dispatch = useAppDispatch();

  const booksData = data?.data;

  // const handleSlider = (value: number[]) => {
  //   dispatch(setPriceRange(value[0]));
  // };

  // let productsData;

  // if (status) {
  //   productsData = data?.data?.filter(
  //     (item: { status: boolean; price: number }) =>
  //       item.status === true && item.price < priceRange
  //   );
  // } else if (priceRange > 0) {
  //   productsData = data?.data?.filter(
  //     (item: { price: number }) => item.price < priceRange
  //   );
  // } else {
  //   productsData = data?.data;
  // }

  return (
    <div className="">
      <div className="">
        <CarouselHome />;
      </div>
      <div className="container mx-auto grid grid-cols-4 gap-2 my-4">
        {booksData?.map((book: IBook) => (
          <Card book={book} />
        ))}
      </div>
    </div>
  );
}
