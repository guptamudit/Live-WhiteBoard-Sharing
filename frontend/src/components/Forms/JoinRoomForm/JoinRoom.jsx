import React from "react";
import "./JoinRoom.css";

const JoinRoom = () => {
  return (
    <div className="row h-100 pt-5">
      <div className="col-md-4 mx-auto p-3 mt-5 form-box border border-2 border-danger rounded-2 d-flex flex-column align-items-center ">
        <h1 className="text-primary fw-bold">Create Room</h1>
      </div>
      <div className="col-md-4 mx-auto p-3 mt-5 form-box border border-2 border-danger  rounded-2 d-flex flex-column align-items-center">
        <h1 className="text-primary fw-bold">Join Room</h1>
      </div>
    </div>
  );
};

export default JoinRoom;
