import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AddNewBook from "../pages/AddNewBook";
import AllBooks from "../pages/AllBooks";
import BooksDetails from "../pages/BooksDetails";
import EditBooks from "../pages/EditBooks";
import Home from "../pages/Home";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import Signup from "../pages/Signup";
import PrivateRoute from "./PrivateRoute";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/all-books",
        element: <AllBooks />,
      },
      {
        path: "/books-details/:id",
        element: <BooksDetails />,
      },
      {
        path: "/add-new-book",
        element: (
          <PrivateRoute>
            <AddNewBook />
          </PrivateRoute>
        ),
      },
      {
        path: "/edit-ooks/:id",
        element: (
          <PrivateRoute>
            <EditBooks />{" "}
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default routes;
