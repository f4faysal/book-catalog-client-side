import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useParams } from "react-router-dom";
import {
  usePostEditBookMutation,
  useSingleBookQuery,
} from "../../redux/features/book/bookApi";
import Loding from "./Loding";

interface LoginFormInputs {
  userEmail?: string;
  title: string;
  author: string;
  genre: string;
  publicationDate: string;
  reviews?: Array<string>;
}

const EdeitBook = () => {
  const { id } = useParams();
  const { data, isLoading } = useSingleBookQuery(id);

  const { title, publicationDate, genre, author } = data.data;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();
  const [postEditBook, { isLoading: EdidisLoading }] =
    usePostEditBookMutation();
  const onSubmit = (editData: LoginFormInputs) => {
    //     const bookData = { ...data, userEmail: user?.email, reviews: [] };
    //     setbookData(bookData);
    const options = {
      id: id,
      data: editData,
    };
    postEditBook(options);
    toast.success("Commant Add Successfully!", {
      style: {
        border: "1px solid #713200",
        padding: "16px",
        color: "#713200",
      },
      iconTheme: {
        primary: "#713200",
        secondary: "#FFFAEE",
      },
    });
    console.log(editData);
    console.log(options);
  };

  if (isLoading) {
    <Loding></Loding>;
  }
  if (EdidisLoading) {
    <Loding></Loding>;
  }

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
            defaultValue={title}
            autoCapitalize="none"
            autoComplete="text"
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
            defaultValue={author}
            type="text"
            autoCapitalize="none"
            autoComplete="text"
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
            defaultValue={genre}
            type="text"
            autoCapitalize="none"
            autoComplete="text"
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
            defaultValue={publicationDate}
            type="text"
            autoCapitalize="none"
            autoComplete="text"
            {...register("publicationDate", {
              required: "PublicationDate is required",
            })}
          />
          {errors.publicationDate && <p>{errors.publicationDate.message}</p>}
        </div>
        <label className="form-control my-6 m-2">
          <button className="btn btn-block">Update Book</button>
        </label>
      </div>
    </form>
  );
};

export default EdeitBook;
