import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Whitepaper from "./pages/Whitepaper";
import BubbleShooter from "./pages/BubbleShooter";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/whitepaper",
    element: <Whitepaper />,
  },
  {
    path: "/bubble-shooter",
    element: <BubbleShooter />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
