import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Route from "./Route/Route";
import { RouterProvider } from "react-router-dom";
import AuthProvider from "./Provider/AuthProvider/AuthProvider";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "aos/dist/aos.css";


const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={Route} />
      </QueryClientProvider>
    </AuthProvider>
    <div>
      <Toaster />
    </div>
  </React.StrictMode>
);
