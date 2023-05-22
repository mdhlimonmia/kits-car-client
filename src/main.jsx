import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routers/Routers";
import AuthProvider from "./providers/AuthProvider";
import { Toaster } from "react-hot-toast";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider> <Toaster position="top-right"/> <RouterProvider router={router} /></AuthProvider>
  </React.StrictMode>
);
