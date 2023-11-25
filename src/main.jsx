import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Route from "./Route/Route";
import { RouterProvider } from "react-router-dom";
import AuthProvider from "./Provider/AuthProvider/AuthProvider";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={Route} />
    </AuthProvider>
    <div>
      <Toaster />
    </div>
  </React.StrictMode>
);
