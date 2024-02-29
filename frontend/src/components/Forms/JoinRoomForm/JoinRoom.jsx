import React from "react";
import "./JoinRoom.css";

const JoinRoom = () => {
  return (
    <form className="form col-md-12 mt-5">
      <div className="form-group">
        <input
          type="text"
          className="form-control my-2"
          placeholder="Enter Your Name"
        />
      </div>

      <div className="form-group border ">
        <input
          type="text"
          className="form-control my-2 border-0 "
          // disabled
          placeholder="Enter Room Code"
        />
      </div>
      <button type="submit" className="mt-4 btn-primary form-control ">
        Join Room
      </button>
    </form>
  );
};

export default JoinRoom;
