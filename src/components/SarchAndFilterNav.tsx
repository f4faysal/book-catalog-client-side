import { BsSearch } from "react-icons/bs";
import { useAppSelector } from "../redux/hook";
import { IBook } from "../types/globalTypes";

interface Iook {
  books: IBook[];
}

const SarchAndFilterNav = ({
  total,
  register,
  onSubmit,
  handleSubmit,
  handleSelectChange,
  selectedOption,
  handleSelectChangeDate,
  selectedOptionDate,
}: any) => {
  const { books }: Iook = useAppSelector((state) => state.books);
  const uniquePublicationDates = [
    ...new Set(books.map((b): any => b.publicationDate)),
  ];
  // Extract all genres from books array
  const genres = books.map((book): any => book.genre);
  // Get unique genres using Set data structure
  const uniqueGenreDates = [...new Set(genres)];

  return (
    <nav className="navbar bg-primary text-neutral-content">
      <div className="flex-1 flex-row-reverse">
        <select
          className=" select select-info w-full max-w-xs"
          value={selectedOptionDate}
          onChange={handleSelectChangeDate}
        >
          <option disabled value="">
            Select Filter Publication Date !
          </option>
          <option value="">All</option>
          {uniquePublicationDates.map((sinflrPublicationDates) => (
            <option value={sinflrPublicationDates}>
              {sinflrPublicationDates}
            </option>
          ))}
        </select>

        <select
          className=" select select-info w-full max-w-xs"
          value={selectedOption}
          onChange={handleSelectChange}
        >
          <option disabled value="">
            Select Filter For Genre !
          </option>
          <option value="">All</option>
          {uniqueGenreDates.map((g) => (
            <option className="" value={g}>
              {g}
            </option>
          ))}
        </select>
      </div>

      {/* ---------------------- */}
      <form className="flex-1" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control">
          <div className="input-group">
            <input
              type="text"
              id="search"
              placeholder="Search…"
              className="input input-bordered"
              autoComplete="text"
              {...register("search")}
            />
            <button className="btn btn-square">
              <BsSearch className="text-xl text-white" />
            </button>
          </div>
        </div>
        <span className="w-10 h-10 bg-black text-white rounded-full mx-2 flex justify-center items-center">
          {total}
        </span>
      </form>
    </nav>
  );
};

export default SarchAndFilterNav;
