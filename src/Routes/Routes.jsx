import { createBrowserRouter } from "react-router";
import Homepage from "../Pages/Homepage";
import Root from "../Pages/Root";
import Books from "../Components/Books";
import ErrorElement from "../Components/ErrorElement";
import ListedBooks from "../Components/ListedBooks";
import BookDetails from "../Pages/BookDetails";

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
        path: '/book-details/:id',
        loader: ()=> fetch('/booksData.json') ,
        Component: BookDetails
      },
      {
        path: '/listed-books',
        Component: ListedBooks,
      }
    ],
    errorElement: <ErrorElement/>,
  },
])