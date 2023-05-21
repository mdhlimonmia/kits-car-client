import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Blogs from "../pages/Blogs/Blogs";
import About from "../pages/About/About";
import AllCar from "../pages/AllCar/AllCar";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
import MyCars from "../pages/MyCars/MyCars";
import AddCar from "../pages/AddCar/AddCar";
import Details from "../pages/Details/Details";
import UpdateCar from "../pages/UpdateCar/UpdateCar";

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
        path: '/mycars',
        element: <MyCars></MyCars>
      },
      {
        path: '/addcar',
        element: <AddCar></AddCar>
      },
      {
        path: '/details/:id',
        element: <Details></Details>,
        loader : ({params})=>fetch(`http://localhost:5000/details/${params.id}`)
        
      },
      {
        path: '/update/:id',
        element: <UpdateCar />,
        loader : ({params})=>fetch(`http://localhost:5000/details/${params.id}`)
  
        
      },
      {
        path: '/blogs',
        element: <Blogs></Blogs>
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: 'register',
        element: <Register></Register>
      }
    ],
  },
]);

export default router;
