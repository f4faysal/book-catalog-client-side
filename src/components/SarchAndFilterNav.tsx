import { BsSearch } from "react-icons/bs";

const SarchAndFilterNav = ({ total, register, onSubmit, handleSubmit }) => {
  return (
    <nav className="navbar bg-primary text-neutral-content">
      <div className="flex-1 flex-row-reverse">
        <ul className="menu bg-base-200 lg:menu-horizontal rounded-box">
          <li>
            <input
              type="text"
              placeholder="Genre"
              //     onChange={(e) => handleFilter(e.target.value, null)}
            />
          </li>
          <li>
            <input
              type="text"
              placeholder="Publication Year"
              //     onChange={(e) => handleFilter(null, e.target.value)}
            />
          </li>
        </ul>

        {/* Filtering options */}

        {/* Book list */}
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
