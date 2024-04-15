import React, { useRef, useState } from "react";
import "./RoomPage.css";
import Whiteboard from "../../components/Whiteboard/Whiteboard";

const RoomPage = () => {
  const canvasRef = useRef(null);
  const ctxRef = useRef(null);

  const [tool, setTool] = useState("Pencil");
  const [color, setColor] = useState("black");
  const [elements, setElements] = useState([]);

  return (
    <div className="container">
      <div className="row">
        <h1 className="text-center py-3">
          White Board Sharing App{" "}
          <span className="text-danger-emphasis">[Users Online: 0]</span>
        </h1>
        <div className="col-md-10 mx-auto  px-5   mb-3 d-flex align-items-center justify-content-center">
          <div className="d-flex col-md-2  justify-content-center gap-1">
            <div className="d-flex gap-1 ">
              <label htmlFor="Pencil">Pencil</label>
              <input
                type="radio"
                name="tool"
                checked={tool === "Pencil"}
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
                checked={tool === "Line"}
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
                value="Rect"
                id="Rect"
                checked={tool === "Rect"}
                className="mt-1"
                onChange={(e) => setTool(e.target.value)}
              />
            </div>
          </div>
          <div className="col-md-3 mx-auto">
            <div className="d-flex  align-items-center justify-content-center ">
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
          <div className="col-md-2">
            <button className="btn btn-danger">Clear Canvas</button>
          </div>
        </div>
        <div className="col-md-10 mx-auto mt-2 canvas-box">
          <Whiteboard
            canvasRef={canvasRef}
            ctxRef={ctxRef}
            elements={elements}
            setElements={setElements}
          />
        </div>
      </div>
    </div>
  );
};

export default RoomPage;
