import { createBrowserRouter } from "react-router";
import Homepage from "../Pages/Homepage";
import Root from "../Pages/Root";
import Books from "../Components/Books";
import ErrorElement from "../Components/ErrorElement";
import ListedBooks from "../Components/ListedBooks";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: 
    [
      {
        index: true, 
        Component: Homepage
      },
      {
        path: '/listed-books',
        Component: ListedBooks,
      }
    ],
    errorElement: <ErrorElement/>,
  },
])