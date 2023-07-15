import { Link, useNavigate, useParams } from "react-router-dom";
import logo from "../assets/images/logo.png";
import BookReview from "../components/BookReview";
import DeleteModal from "../components/DeleteModal";
import Loding from "../components/ui/Loding";
import {
  useDeleteBookMutation,
  useSingleBookQuery,
} from "../redux/features/book/bookApi";
import { useAppSelector } from "../redux/hook";

export default function BooksDetails() {
  const { id } = useParams();

  const { user } = useAppSelector((state) => state.user);

  const { data, isLoading, error } = useSingleBookQuery(id);
  const [deleteBook, { isLoading: deleteIsLoading }] = useDeleteBookMutation();
  const navigate = useNavigate();
  const handleDeleteBook = async (id) => {
    try {
      await deleteBook(id);
      navigate("/all-books");
      // Book successfully deleted.
    } catch (error) {
      // Handle the error.
    }
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
                {user?.email === data?.data?.userEmail ? (
                  <>
                    <Link to={`/edit-ooks/${data?.data?._id}`}>
                      <button className="btn btn-warning ">Edit</button>
                    </Link>
                    <button
                      onClick={() => window.my_modal_1.showModal()}
                      className="btn btn-error"
                    >
                      Delete
                    </button>
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
