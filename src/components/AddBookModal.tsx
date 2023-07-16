import { toast } from "react-hot-toast";
import { useCreateBookMutation } from "../redux/features/book/bookApi";
import Loding from "./ui/Loding";

interface BookData {
  title: string;
  author: string;
  genre: string;
  publicationDate: string;
}
// const AddBookModal = ({ getbookData, reset }: any) => {
const AddBookModal = ({
  getbookData,
  setbookData,
  reset,
}: {
  getbookData: BookData;
  setbookData: any;
  reset: () => void;
}) => {
  // const navigate = useNavigate();
  const { title, author, genre, publicationDate } = getbookData;
  const [createBook, { isLoading }] = useCreateBookMutation();

  const uplodDb = async () => {
    const response = await createBook(getbookData);
    setbookData({});
    if ("data" in response && response.data?.data?.title) {
      toast.success(`Book ${response.data.data.title} Add Success`);
    } else {
      // Handle the case where 'data' property is missing or 'title' property is missing
      toast.error("Failed to add book");
    }
    reset();
  };

  if (isLoading) {
    <Loding></Loding>;
  }

  return (
    <>
      <input type="checkbox" id="add_book_modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Add a new Book</h3>
          <p className="my-1">
            {" "}
            <span className="font-semibold text-white"> Title : </span> {title}{" "}
          </p>
          <p className="my-1">
            {" "}
            <span className="font-semibold text-white"> Author : </span>
            {author}{" "}
          </p>
          <p className="my-1">
            {" "}
            <span className="font-semibold text-white"> Genre : </span> {genre}{" "}
          </p>
          <p className="my-1">
            {" "}
            <span className="font-semibold text-white">
              {" "}
              Publication Date :
            </span>{" "}
            {publicationDate}{" "}
          </p>
          <div className="modal-action">
            <label onClick={uplodDb} htmlFor="add_book_modal" className="btn">
              Done!
            </label>
            <label htmlFor="add_book_modal" className="btn">
              Close!
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddBookModal;
