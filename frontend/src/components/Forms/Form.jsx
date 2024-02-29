import React from "react";
import "./Form.css";
import CreateRoom from "./CreateRoomForm/CreateRoom";
import JoinRoom from "./JoinRoomForm/JoinRoom";

const Form = () => {
  return (
    <div className="row h-100 pt-5">
      <div className="col-md-4 mx-auto p-5 mt-5 form-box border border-2 border-danger rounded-2 d-flex flex-column align-items-center ">
        <h1 className="text-primary fw-bold">Create Room</h1>
        <CreateRoom />
      </div>
      <div className="col-md-4 mx-auto p-5 mt-5 form-box border border-2 border-danger  rounded-2 d-flex flex-column align-items-center">
        <h1 className="text-primary fw-bold">Join Room</h1>
        <JoinRoom />
      </div>
    </div>
  );
};

export default Form;
