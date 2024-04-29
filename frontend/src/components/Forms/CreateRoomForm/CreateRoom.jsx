import React, { useState } from "react";
import "./CreateRoom.css";
import { useNavigate } from "react-router-dom";

const CreateRoom = ({ uuid, socket, setUser }) => {
  const [roomId, setRoomId] = useState(uuid());
  const [name, setName] = useState("");

  const navigate = useNavigate();

  const handleCreateRoom = (e) => {
    e.preventDefault();

    const roomData = {
      name,
      roomId,
      userId: uuid(),
      host: true,
      presenter: true,
    };
    setUser(roomData);
    navigate(`/${roomId}`);
    console.log(roomData);
    socket.emit("userJoined", roomData);
  };
  const copyRoomId = () => {
    navigator.clipboard
      .writeText(roomId)
      .then(() => {
        alert("Room ID copied to clipboard");
      })
      .catch((err) => {
        console.error("Could not copy text: ", err);
      });
  };

  return (
    <form className="form col-md-12 mt-5">
      <div className="form-group">
        <input
          type="text"
          className="form-control my-2"
          placeholder="Enter Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="form-group border ">
        <div className="input-group d-flex align-items-center justify-content-center">
          <input
            type="text"
            className="form-control my-2 border-0 "
            value={roomId}
            disabled
            placeholder="Generate Room Code"
          />
          <div className="input-group-append  ">
            <button
              className="btn btn-primary  me-1"
              onClick={() => setRoomId(uuid())}
              type="button"
            >
              Generate
            </button>
            <button
              onClick={copyRoomId}
              type="button"
              className="btn btn-outline-danger  me-1 "
            >
              Copy
            </button>
          </div>
        </div>
      </div>
      <button
        type="submit"
        onClick={handleCreateRoom}
        className="mt-4 btn-primary form-control "
      >
        Generate Room
      </button>
    </form>
  );
};

export default CreateRoom;
