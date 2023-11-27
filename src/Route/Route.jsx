import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import Registration from "../Pages/Registration/Registration";
import Login from "../Pages/Login/Login";
import Gellary from "../Pages/Gellary/Gellary";
import Trainer from "../Pages/Trainer/Trainer/Trainer";
import TrainerDetails from "../Pages/Trainer/TrainerDetails/TrainerDetails";
import ApplyTrainer from "../Pages/Trainer/ApplyTrainer/ApplyTrainer";
import Booked from "../Pages/Trainer/Booked/Booked";

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
        element: <Trainer></Trainer>,
      },
      {
        path: "/user/trainerprofile/:id",
        element: <TrainerDetails></TrainerDetails>,
      },
      {
        path: '/user/applytrainer',
        element: <ApplyTrainer></ApplyTrainer>
      },
      {
        path: 'user/booked',
        element:<Booked></Booked>
    }
    ],
  },
]);

export default Route;
