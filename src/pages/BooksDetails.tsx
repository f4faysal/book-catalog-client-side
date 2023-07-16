import { toast } from "react-hot-toast";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { Link, useNavigate, useParams } from "react-router-dom";
import logo from "../assets/images/logo.png";
import BookReview from "../components/BookReview";
import DeleteModal from "../components/DeleteModal";
import Loding from "../components/ui/Loding";
import {
  useDeleteBookMutation,
  useSingleBookQuery,
} from "../redux/features/book/bookApi";
import { addToFavorite } from "../redux/features/favorite/favoriteSlice";
import { addToWishlist } from "../redux/features/wishlist/wishlistSlice";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { IBook } from "../types/globalTypes";

export default function BooksDetails() {
  const { id } = useParams();

  const { user } = useAppSelector((state) => state.user);

  const { data, isLoading } = useSingleBookQuery(id);
  const [deleteBook, { isLoading: deleteIsLoading }] = useDeleteBookMutation();
  const navigate = useNavigate();
  const handleDeleteBook = async (id: any) => {
    try {
      await deleteBook(id);
      navigate("/all-books");
      // Book successfully deleted.
    } catch (error) {
      // Handle the error.
    }
  };
  const dispatch = useAppDispatch();
  const handleAddWishlist = (book: IBook) => {
    dispatch(addToWishlist(book));
    toast.success("Wishlist Added");
  };
  const handleAddFavorite = (book: IBook) => {
    dispatch(addToFavorite(book));
    toast.success("Currently Reading Added");
  };
  if (isLoading) {
    return <Loding />;
  }
  if (deleteIsLoading) {
    return <Loding />;
  }

  return (
    <div>
      <DeleteModal handleDeleteBook={handleDeleteBook} data={data} />
      <div className="hero min-h-screen ">
        <div className=" card w-1/3">
          <div className="card bg-primary shadow-xl">
            <figure>
              <img src={logo} alt="Book" />
            </figure>
            <div className="card-body text-black">
              <h2 className="card-title">{data?.data?.title}</h2>
              <p> Author : {data?.data?.author}</p>
              <p> Genre : {data?.data?.genre}</p>
              <p> Publication Date : {data?.data?.publicationDate}</p>
              <div className="card-actions justify-end">
                <button
                  onClick={() => handleAddWishlist(data?.data)}
                  className="btn btn-outline "
                >
                  Wishlist
                </button>
                <button
                  onClick={() => handleAddFavorite(data?.data)}
                  className="btn btn-success "
                >
                  <MdOutlineFavoriteBorder className="text-2xl text-red-700" />
                </button>
                {user?.email === data?.data?.userEmail ? (
                  <>
                    <Link to={`/edit-ooks/${data?.data?._id}`}>
                      <button className="btn btn-warning ">Edit</button>
                    </Link>
                    {/* The button to open modal */}
                    <label htmlFor="my_modal_6" className="btn">
                      Delete
                    </label>

                    {/* Put this part before </body> tag */}
                  </>
                ) : (
                  <>
                    <button className="btn btn-warning btn-disabled ">
                      Edit
                    </button>
                    <button className="btn btn-error btn-disabled">
                      Delete
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-2xl text-center text-white">Book Review</h2>
      </div>
      <BookReview id={id} />
    </div>
  );
}
