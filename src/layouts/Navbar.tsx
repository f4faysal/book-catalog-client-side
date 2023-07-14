import { signOut } from "firebase/auth";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { auth } from "../lib/firebase";
import { setUser } from "../redux/features/user/userSlice";
import { useAppDispatch, useAppSelector } from "../redux/hook";

export default function Navbar() {
  const { user } = useAppSelector((state) => state.user);

  const dispatch = useAppDispatch();

  const handleLogout = () => {
    console.log("Logout");
    signOut(auth).then(() => {
      // Sign-out successful.
      dispatch(setUser(null));
    });
  };

  return (
    <nav className="navbar bg-zinc-800 ">
      <div className="navbar container mx-auto">
        <div className="flex-1">
          <Link to="/">
            <img src={logo} className="w-24" />
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
              {!user.email && (
                <>
                  <li>
                    <Link to="/login">Login</Link>
                  </li>
                  <li>
                    <Link to="/signup">signup</Link>
                  </li>
                </>
              )}
              {user.email && (
                <li onClick={handleLogout}>
                  <Link to="/">Logout</Link>
                </li>
              )}
            </ul>
          </div>
          {user.email && <div>{user.email}</div>}
        </div>
      </div>
    </nav>
  );
}
