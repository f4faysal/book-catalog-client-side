import { signOut } from "firebase/auth";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { FaCashRegister } from "react-icons/fa";
import { FiBookOpen } from "react-icons/fi";
import { MdMarkEmailRead, MdOutlineLogin } from "react-icons/md";
import { RiLogoutBoxRFill } from "react-icons/ri";
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
    <nav className="navbar bg-neutral ">
      <div className="navbar container mx-auto">
        <div className="flex-1">
          <Link to="/">
            <img src={logo} className="w-24" />
          </Link>
        </div>
        <div className="flex-none gap-2">
          <div className="form-control flex-none gap-2">
            <ul className="menu menu-horizontal px-1">
              <li>
                <Link className="justify-between" to="/all-books">
                  All Books{" "}
                  <span className="badge">
                    <FiBookOpen className="text-xl text-white" />
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/wishlist">Wishlist</Link>
              </li>
              {!user.email && (
                <>
                  <li>
                    <Link to="/login">
                      {" "}
                      <MdOutlineLogin /> Login
                    </Link>
                  </li>
                  <li>
                    <Link to="/signup">
                      <FaCashRegister /> signup
                    </Link>
                  </li>
                </>
              )}
              {user.email && (
                <>
                  <li>
                    <Link to="/add-new-book">
                      {" "}
                      <AiOutlineAppstoreAdd className="text-xl text-white" />{" "}
                      Add New
                    </Link>
                  </li>
                  <li onClick={handleLogout}>
                    <Link to="/">
                      Logout <RiLogoutBoxRFill className="text-xl" />
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
          {user.email && (
            <div className="flex justify-center items-center gap-1">
              {" "}
              <MdMarkEmailRead className="text-xl text-white" /> {user.email}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
