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
import Classes from "../Pages/Classes/Classes/Classes";
import ClassDetails from "../Pages/Classes/ClassDetails/ClassDetails";
import DashBoardLayout from "../Layout/MainLayout/DashBoardLayout";
import DashHome from "../Pages/DashBoard/DashHome/DashHome";
import AllSubscribe from "../Pages/DashBoard/AllSubscribe/AllSubscribe";
import AllTrainer from "../Pages/DashBoard/AllTrainer/AllTrainer";
import AllUsers from "../Pages/DashBoard/AllUsers/AllUsers";
import PrivetRoute from "./PrivetRoute";
import DashApplyTrainer from "../Pages/DashBoard/DashApplyTrainer/DashApplyTrainer";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

const Route = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement:<ErrorPage></ErrorPage>,
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
        element: (
          <PrivetRoute>
            <TrainerDetails></TrainerDetails>
          </PrivetRoute>
        ),
      },
      {
        path: "/user/applytrainer",
        element: (
          <PrivetRoute>
            <ApplyTrainer></ApplyTrainer>
          </PrivetRoute>
        ),
      },
      {
        path: "user/booked",
        element: (
          <PrivetRoute>
            {" "}
            <Booked></Booked>
          </PrivetRoute>
        ),
      },
      {
        path: "/classes",
        element: <Classes></Classes>,
      },
      {
        path: "/classes/:id",
        element: <ClassDetails></ClassDetails>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivetRoute>
        <DashBoardLayout></DashBoardLayout>
      </PrivetRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <DashHome></DashHome>,
      },
      {
        path: "/dashboard/allsubscriber",
        element: <AllSubscribe></AllSubscribe>,
      },
      {
        path: "/dashboard/alltrainer",
        element: <AllTrainer></AllTrainer>,
      },
      {
        path: "/dashboard/allusers",
        element: <AllUsers></AllUsers>,
      },
      {
        path: "/dashboard/appliedtrainer",
        element: <DashApplyTrainer></DashApplyTrainer>,
      },
    ],
  },
]);

export default Route;
