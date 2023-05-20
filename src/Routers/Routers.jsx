import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Blogs from "../pages/Blogs/Blogs";
import About from "../pages/About/About";
import AllCar from "../pages/AllCar/AllCar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/allcar',
        element: <AllCar></AllCar>
      },
      {
        path: '/blogs',
        element: <Blogs></Blogs>
      },
      {
        path: '/about',
        element: <About></About>
      }
    ],
  },
]);

export default router;
