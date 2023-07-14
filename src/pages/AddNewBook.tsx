import { useForm } from "react-hook-form";

interface LoginFormInputs {
  user?: string;
  title: string;
  author: string;
  genre: string;
  publicationDate: string;
  reviews?: Array<string>;
  emailError?: string; // Add optional error message property
  passwordError?: string; // Add optional error message property
}

export default function AddNewBook() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();
  const onSubmit = (data: LoginFormInputs) => {
    console.log(data);
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid gap-2">
              <div className="grid gap-1 form-control">
                <label className="label">
                  <span className="label-text">Book Title</span>
                </label>
                <input
                  className="input input-bordered w-full max-w-xs"
                  id="title"
                  placeholder="Book Title"
                  type="text"
                  autoCapitalize="none"
                  autoComplete="text"
                  autoCorrect="off"
                  {...register("title", { required: "Title is required" })}
                />
                {errors.title && <p>{errors.title.message}</p>}
                <label className="label">
                  <span className="label-text">Book Author</span>
                </label>
                <input
                  className="input input-bordered w-full max-w-xs"
                  id="author"
                  placeholder="Book Author"
                  type="text"
                  autoCapitalize="none"
                  autoComplete="text"
                  autoCorrect="off"
                  {...register("author", { required: "Author is required" })}
                />
                {errors.author && <p>{errors.author.message}</p>}
                <label className="label">
                  <span className="label-text">Book Genre</span>
                </label>
                <input
                  className="input input-bordered w-full max-w-xs"
                  id="genre"
                  placeholder="Book Genre"
                  type="text"
                  autoCapitalize="none"
                  autoComplete="text"
                  autoCorrect="off"
                  {...register("genre", { required: "Genre is required" })}
                />
                {errors.genre && <p>{errors.genre.message}</p>}
                <label className="label">
                  <span className="label-text">Book PublicationDate</span>
                </label>
                <input
                  className="input input-bordered w-full max-w-xs"
                  id="publicationDate"
                  placeholder="Book publicationDate"
                  type="text"
                  autoCapitalize="none"
                  autoComplete="text"
                  autoCorrect="off"
                  {...register("publicationDate", {
                    required: "PublicationDate is required",
                  })}
                />
                {errors.publicationDate && (
                  <p>{errors.publicationDate.message}</p>
                )}
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Add New Book</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
