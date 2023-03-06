import React, { useState } from "react";
import myImg from ".pic.jpg";

function DraggableImage(props) {
  const [dragging, setDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  
  const handleMouseDown = (event) => {
    setDragging(true);
    setPosition({
      x: event.clientX - event.target.offsetLeft,
      y: event.clientY - event.target.offsetTop
    });
  };
  
  const handleMouseUp = () => {
    setDragging(false);
  };
  
  const handleMouseMove = (event) => {
    if (dragging) {
      setPosition({
        x: event.clientX - position.x,
        y: event.clientY - position.y
      });
    }
  };
  
  return (
    <img
      src={myImg}
      alt={props.alt}
      style={{
        position: "absolute",
        top: position.y + "px",
        left: position.x + "px",
        cursor: "move"
      }}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
    />
  );
}

export default DraggableImage;
