import { Card } from "../components/ui/Card";
import { useAppSelector } from "../redux/hook";

const Wishlist = () => {
  const { wishlist } = useAppSelector((state) => state.wishlist);
  return (
    <main className="min-h-screen">
      <section>
        <div className="container mx-auto grid grid-cols-4 gap-2 my-4">
          {wishlist?.map((book, i: number) => (
            <Card book={book} key={i} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Wishlist;
