import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AddNewBook from "../pages/AddNewBook";
import AllBooks from "../pages/AllBooks";
import AllBooksDetails from "../pages/AllBooksDetails";
import EditBooks from "../pages/EditBooks";
import Home from "../pages/Home";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import Signup from "../pages/Signup";

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
        path: "/all-books-details/:id",
        element: <AllBooksDetails />,
      },
      {
        path: "/add-new-book",
        element: <AddNewBook />,
      },
      {
        path: "/edit-ooks",
        element: <EditBooks />,
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
