import React, { useEffect, useState } from "react";
import "./Whiteboard.css";
import rough from "roughjs";

const roughGenerator = rough.generator();

const Whiteboard = ({ canvasRef, ctxRef, elements, setElements }) => {
  const [isDrawing, setIsDrawing] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    ctxRef.current = ctx;
  }, []);

  const handleMouseDown = (e) => {
    const { offsetX, offsetY } = e.nativeEvent;
    console.log(offsetX, offsetY);
  };

  const handleMouseMove = (e) => {
    const { offsetX, offsetY } = e.nativeEvent;
    console.log(offsetX, offsetY);
  };

  const handleMouseUp = (e) => {
    const { offsetX, offsetY } = e.nativeEvent;
    console.log(offsetX, offsetY);
  };

  return (
    <>
      {JSON.stringify(elements)}
      <canvas
        ref={canvasRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        className="border border-dark border-3  h-100 w-100"
      ></canvas>
    </>
  );
};

export default Whiteboard;
