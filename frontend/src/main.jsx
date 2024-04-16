import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import io from "socket.io-client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Form from "./components/Forms/Form.jsx";
import RoomPage from "./pages/RoomPage/RoomPage.jsx";

const App = () => {
  const server = "http://localhost:5000";
  const connectionOptions = {
    "force new Connection": true,
    reconnectionAttempts: "Infinity",
    timeout: 10000,
    transports: ["websocket"],
  };

  const uuid = () => {
    let S4 = () => {
      return (((1 + Math.random()) * 0x1000) | 0).toString(16).substring(1);
    };
    return (
      S4() +
      S4() +
      "_" +
      S4() +
      "_" +
      S4() +
      "_" +
      S4() +
      "_" +
      S4() +
      S4() +
      S4()
    );
  };
  const [user, setUser] = useState(null);
  const socket = io(server, connectionOptions);
  useEffect(() => {
    socket.on("userIsJoined", (data) => {
      if (data.success) {
        console.log("userJoined");
      } else {
        console.log("UserJoin Error");
      }
    });
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Form uuid={uuid} setUser={setUser} socket={socket} />,
    },
    {
      path: "/:roomId",
      element: <RoomPage user={user} socket={socket} />,
    },
  ]);

  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
