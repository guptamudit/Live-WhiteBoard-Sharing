import React, { useState } from "react";
import "./RoomPage.css";

const RoomPage = () => {
  const [tool, setTool] = useState("Pencil");
  const [color, setColor] = useState("Black");

  return (
    <div className="container">
      <div className="row">
        <h1 className="text-center py-5">White Board Sharing App</h1>
        <div className="col-md-12 gap-3 px-5  mt-4 mb-5 d-flex align-items-center justify-content-between">
          <div className="d-flex col-md-2  justify-content-between gap-1">
            <div className="d-flex gap-1 ">
              <label htmlFor="Pencil">Pencil</label>
              <input
                type="radio"
                name="tool"
                value="Pencil"
                id="Pencil"
                className="mt-1"
                onChange={(e) => setTool(e.target.value)}
              />
            </div>
            <div className="d-flex gap-1 align-items-center">
              <label htmlFor="Line">Line</label>
              <input
                type="radio"
                name="tool"
                value="Line"
                id="Line"
                className="mt-1"
                onChange={(e) => setTool(e.target.value)}
              />
            </div>
            <div className="d-flex gap-1 align-items-center">
              <label htmlFor="Rectangle">Rectangle</label>
              <input
                type="radio"
                name="tool"
                value="Rectangle"
                id="Rectangle"
                className="mt-1"
                onChange={(e) => setTool(e.target.value)}
              />
            </div>
          </div>
          <div className="col-md-7">
            <div className="d-flex  align-items-center">
              <label htmlFor="color">Select Color: </label>
              <input
                type="color"
                id="color"
                className="mt-1 ms-2"
                value={color}
                onChange={(e) => setColor(e.target.value)}
              />
            </div>
          </div>
          <div className="col-md-3 d-flex gap-2 ">
            <button className="btn btn-primary mt-1">Undo</button>
            <button className="btn btn-outline-primary mt-1">Redo</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomPage;
