import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Form from "./components/Forms/Form.jsx";
import RoomPage from "./pages/RoomPage/RoomPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Form />,
    errorElement: <div>404 Not Found!</div>,
  },
  {
    path: "/:roomId",
    element: <RoomPage />,
  },
]);

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById("root")
);
