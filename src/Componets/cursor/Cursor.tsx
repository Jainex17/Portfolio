import React from "react";
import "./cursor.css";

function Cursor() {

  var cursor : HTMLElement | null = document.querySelector(".cursor");
  let mouseX = "0px";
  let mouseY = "0px";
  let timeout: ReturnType<typeof setTimeout>;

  const [scale, setScale] = React.useState(1);
  const [opacity, setOpacity] = React.useState(0);

  document.addEventListener("mousemove", (e) => {
    // setOpacity(1);
    if (cursor) {
      cursor.style.top = e.clientY - 15 + "px";
      cursor.style.left = e.clientX - 15 + "px";
      mouseX = `${e.clientX}px`;
      mouseY = `${e.clientY}px`;
      setOpacity(1);
    }
    
		clearTimeout(timeout);
		timeout = setTimeout(() => {
			setOpacity(0);
		}, 1000);
  
  });
  document.addEventListener("mousedown", () => {
    setScale(1.3);
  });
  document.addEventListener("mouseup", () => {
    setScale(1);
  });


  return( 
  // <div className="cursor"></div>
//   <div
// 	className="cursor"
// 	style={{transform: `translateX(${mouseX}px) translateY(${mouseY}px) scale({scale})`}}
// />
<div
  className="cursor"
  style={{
    top: mouseY,
    left: mouseX,
    transform: `scale(${scale})`,
    opacity: opacity,
  }}
/>
  
  );
}

export default Cursor;
