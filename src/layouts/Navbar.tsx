import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

export default function Navbar() {
  return (
    <nav className="navbar bg-zinc-800 ">
      <div className="navbar container mx-auto">
        <div className="flex-1">
          <Link to="/">
            <img src={logo} className="w-28" />
          </Link>
        </div>
        <div className="flex-none gap-2">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-24 md:w-auto"
            />
          </div>
          <div className="flex-none gap-2">
            <ul className="menu menu-horizontal px-1">
              <li>
                <Link className="justify-between" to="/">
                  Profile <span className="badge">New</span>
                </Link>
              </li>
              <li>
                <Link to="/products">Products</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/signup">signup</Link>
              </li>
              <li>
                <Link to="/">Logout</Link>
              </li>
            </ul>
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}
