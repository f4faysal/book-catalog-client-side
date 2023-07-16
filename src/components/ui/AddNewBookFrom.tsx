import { useState } from "react";
import { useForm } from "react-hook-form";
import { useAppSelector } from "../../redux/hook";
import AddBookModal from "../AddBookModal";

interface LoginFormInputs {
  userEmail?: string;
  title: string;
  author: string;
  genre: string;
  publicationDate: string;
  reviews?: Array<string>;
}

interface BookData {
  title: string;
  author: string;
  genre: string;
  publicationDate: string;
}
const AddNewBookFrom = () => {
  const [getbookData, setbookData] = useState<BookData>({
    // Specify BookData type here
    title: "",
    author: "",
    genre: "",
    publicationDate: "",
  });
  const { user } = useAppSelector((state) => state.user);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginFormInputs>();

  const onSubmit = (data: LoginFormInputs) => {
    const bookData = { ...data, userEmail: user?.email, reviews: [] };
    setbookData(bookData);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="card w-96 bg-primary text-primary-content ">
        <div className="card-body grid form-control">
          <label className="label">
            <span className="label-text text-black">Book Title</span>
          </label>
          <input
            className="input input-bordered text-white w-full max-w-xs"
            id="title"
            placeholder="title"
            type="text"
            autoCapitalize="none"
            autoComplete="text"
            autoCorrect="off"
            {...register("title", { required: "Title is required" })}
          />
          {errors.title && <p>{errors.title.message}</p>}
          <label className="label">
            <span className="label-text text-black">Book Author</span>
          </label>
          <input
            className="input input-bordered text-white w-full max-w-xs"
            id="author"
            placeholder="author"
            type="text"
            autoCapitalize="none"
            autoComplete="text"
            autoCorrect="off"
            {...register("author", { required: "Author is required" })}
          />
          {errors.author && <p>{errors.author.message}</p>}
          <label className="label">
            <span className="label-text text-black">Book Genre</span>
          </label>
          <input
            className="input input-bordered text-white w-full max-w-xs"
            id="genre"
            placeholder="genre"
            type="text"
            autoCapitalize="none"
            autoComplete="text"
            autoCorrect="off"
            {...register("genre", { required: "Genre is required" })}
          />
          {errors.genre && <p>{errors.genre.message}</p>}
          <label className="label">
            <span className="label-text text-black">Book PublicationDate</span>
          </label>
          <input
            className="input input-bordered text-white w-full max-w-xs"
            id="publicationDate"
            placeholder="publicationDate"
            type="text"
            autoCapitalize="none"
            autoComplete="text"
            autoCorrect="off"
            {...register("publicationDate", {
              required: "PublicationDate is required",
            })}
          />
          {errors.publicationDate && <p>{errors.publicationDate.message}</p>}
        </div>
        <label className="form-control my-6 m-2">
          <button>
            <label htmlFor="add_book_modal" className="btn btn-block">
              Add New Book
            </label>
          </button>
        </label>
      </div>

      <>
        <AddBookModal
          getbookData={getbookData}
          setbookData={setbookData}
          reset={reset}
        />
      </>
    </form>
  );
};

export default AddNewBookFrom;
