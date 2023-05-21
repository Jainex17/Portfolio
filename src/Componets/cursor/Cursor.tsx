import "./cursor.css";

function Cursor() {

  var cursor : HTMLElement | null = document.querySelector(".cursor");
  
  document.addEventListener("mousemove", (e) => {
    if(cursor){
      cursor.style.top = e.clientY + "px";
      cursor.style.left = e.clientX + "px";
    }
  });


  return <div className="cursor"></div>;
}

export default Cursor;

// import React, { useEffect, useState } from "react";
// import "./cursor.css";

// const Cursor = () => {
//   const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
//   const [cursorBorderPos, setCursorBorderPos] = useState({ x: 0, y: 0 });

//   useEffect(() => {
//     const handleMouseMove = (e: MouseEvent) => {
//       const { clientX, clientY } = e;
//       setCursorPos({ x: clientX, y: clientY });
//     };

//     document.addEventListener("mousemove", handleMouseMove);

//     return () => {
//       document.removeEventListener("mousemove", handleMouseMove);
//     };

    
//   }, []);

//   useEffect(() => {
//     const easting = 8;
//     const loop = () => {
//       setCursorBorderPos((prevPos) => ({
//         x: prevPos.x + (cursorPos.x - prevPos.x) / easting,
//         y: prevPos.y + (cursorPos.y - prevPos.y) / easting,
//       }));

//       requestAnimationFrame(loop);
//     };

//     requestAnimationFrame(loop);
//   }, [cursorPos]);

//   return (
//     <>
//       <div
//         id="cursor"
//         style={{ transform: `translate(${cursorPos.x}px, ${cursorPos.y}px)` }}
//       ></div>
//       <div
//         id="cursor-border"
//         style={{ transform: `translate(${cursorBorderPos.x}px, ${cursorBorderPos.y}px)` }}
//       ></div>
//     </>
//   );
// };

// export default Cursor;
