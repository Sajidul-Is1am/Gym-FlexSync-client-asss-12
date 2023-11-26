import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import Registration from "../Pages/Registration/Registration";
import Login from "../Pages/Login/Login";
import Gellary from "../Pages/Gellary/Gellary";
import Trainer from "../Pages/Trainer/Trainer";

const Route = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/registration",
        element: <Registration></Registration>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/gellery",
        element: <Gellary></Gellary>,
      },
      {
        path: "/trainer",
        element:<Trainer></Trainer>
      }
    ],
  },
]);

export default Route;
