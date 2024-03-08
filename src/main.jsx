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
    path: "/workshop-final",
    element: <App />,
  },
  {
    path: "/workshop-final/juliana",
    element: <Juliana />,
  },
  {
    path: "/workshop-final/miguelito",
    element: <Miguelito />,
  },
  {
    path: "/workshop-final/ney",
    element: <Ney />,
  },
  {
    path: "/workshop-final/joão",
    element: <João />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
