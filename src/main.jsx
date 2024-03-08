import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Juliana from "./pages/juliana.jsx";
import Miguelito from "./pages/miguelito.jsx";
import Ney from "./pages/ney.jsx";
import João from "./pages/joão.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/juliana",
    element: <Juliana />,
  },
  {
    path: "/miguelito",
    element: <Miguelito />,
  },
  {
    path: "/ney",
    element: <Ney />,
  },
  {
    path: "/joão",
    element: <João />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
