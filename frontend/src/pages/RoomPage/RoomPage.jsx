import React, { useRef, useState } from "react";
import "./RoomPage.css";
import Whiteboard from "../../components/Whiteboard/Whiteboard";

const RoomPage = ({ user, socket, users }) => {
  const canvasRef = useRef(null);
  const ctxRef = useRef(null);

  const [tool, setTool] = useState("Pencil");
  const [color, setColor] = useState("black");
  const [elements, setElements] = useState([]);
  const [history, setHistory] = useState([]);
  const [openendUserTab, setOpenedUserTab] = useState(false);

  const handleClearCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.fillRect = "white";
    ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);

    setElements([]);
  };

  const undo = () => {
    setHistory((prevHistory) => [
      ...prevHistory,
      elements[elements.length - 1],
    ]);
    setElements((prevElements) =>
      prevElements.slice(0, prevElements.length - 1)
    );
  };

  const redo = () => {
    setElements((prevElements) => [
      ...prevElements,
      history[history.length - 1],
    ]);
    setHistory((prevHistory) => prevHistory.slice(0, prevHistory.length - 1));
  };

  return (
    <div className="container">
      <div className="row">
        <button
          type="button"
          className="btn btn-dark "
          style={{
            display: "block",
            position: "absolute",
            top: "5%",
            left: "5%",
            height: "40px",
            width: "100px",
          }}
          onClick={() => setOpenedUserTab(true)}
        >
          {" "}
          Users
        </button>
        {openendUserTab && (
          <div
            className="position-fixed top-0  bg-dark text-white"
            style={{ width: "250px", left: "0", height: "100%" }}
          >
            <button
              type="button"
              className="btn btn-light btn-block w-100 mt-5"
              onClick={() => setOpenedUserTab(false)}
            >
              Close
            </button>
            <div className="w-100  pt-3">
              {users.map((usr, index) => (
                <p key={index * 999} className="my-2 text-center  w-100">
                  {usr.name} {user && user.userId == usr.userId && "(You)"}
                </p>
              ))}
            </div>
          </div>
        )}
        <h1 className="text-center py-3">
          White Board Sharing App{" "}
          <h4 className="text-danger-emphasis">Users Online: {users.length}</h4>
        </h1>
        {user?.presenter && (
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
              <button
                className="btn btn-primary mt-1"
                disabled={elements.length === 0}
                onClick={() => undo()}
              >
                Undo
              </button>
              <button
                className="btn btn-outline-primary mt-1"
                disabled={history.length < 1}
                onClick={() => redo()}
              >
                Redo
              </button>
            </div>
            <div className="col-md-2">
              <button className="btn btn-danger" onClick={handleClearCanvas}>
                Clear Canvas
              </button>
            </div>
          </div>
        )}

        <div className="col-md-10 mx-auto mt-2 canvas-box">
          <Whiteboard
            canvasRef={canvasRef}
            ctxRef={ctxRef}
            elements={elements}
            setElements={setElements}
            tool={tool}
            color={color}
            user={user}
            socket={socket}
          />
        </div>
      </div>
    </div>
  );
};

export default RoomPage;
