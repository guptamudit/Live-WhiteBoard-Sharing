import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import io from "socket.io-client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Form from "./components/Forms/Form.jsx";
import RoomPage from "./pages/RoomPage/RoomPage.jsx";

const server = "http://localhost:5000";
const connectionOptions = {
  "force new connection": true,
  reconnectionAttempts: `Infinity`,
  timeout: 10000,
  transports: ["websocket"],
};

const socket = io(server, connectionOptions);

const App = () => {
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    socket.on("userIsJoined", (data) => {
      if (data.success) {
        console.log("userJoined");
        setUsers(data.users);
      } else {
        console.log("UserJoin Error");
      }
    });

    socket.on("allUsers", (data) => {
      setUsers(data);
    });

    // Clean up socket listeners
    return () => {
      socket.off("userIsJoined");
      socket.off("allUsers");
    };
  }, []);

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

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Form uuid={uuid} setUser={setUser} socket={socket} />}
        />
        <Route
          path="/:roomId"
          element={<RoomPage user={user} socket={socket} users={users} />}
        />
      </Routes>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
