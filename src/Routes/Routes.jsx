import { createBrowserRouter } from "react-router";
import Homepage from "../Pages/Homepage";
import Root from "../Pages/Root";
import Books from "../Components/Books";
import ErrorElement from "../Components/ErrorElement";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: 
    [
      {index: true, Component: Homepage},
      {
        path: '/books',
        Component: Books,
      }
    ],
    errorElement: <ErrorElement/>,
  },
])