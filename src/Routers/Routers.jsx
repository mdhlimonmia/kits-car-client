import { createBrowserRouter } from "react-router-dom";
import Main from "../assets/Layout/Main";
import Home from "../assets/pages/Home/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
]);

export default router;
