import React, { useState } from "react";
import "./cursor.css";

function Cursor() {
  var cursor: HTMLElement | null = document.querySelector(".cursor");
  let mouseX = "0px";
  let mouseY = "0px";
  let timeout: ReturnType<typeof setTimeout>;

  const [opacity, setOpacity] = useState(0);

  document.addEventListener("mousemove", (e) => {
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

  // when click on the screen the cursor will be bigger
  // TODO :- but after click raddpidly the cursor is frizing and not going back to the original size

  // const [scale, setScale] = useState(1);
  // const [isCoolingDown, setIsCoolingDown] = useState(false);
  // let cooldownTimeout: ReturnType<typeof setTimeout>;
  // document.addEventListener("mousedown", () => {
  //   if (!isCoolingDown) {
  //     setScale(1.3);
  //     setIsCoolingDown(true);

  //     clearTimeout(cooldownTimeout);
  //     cooldownTimeout = setTimeout(() => {
  //       setIsCoolingDown(false);
  //     }, 1000);
  //     setScale(1.3);
  //   }
  // });
  // document.addEventListener("mouseup", () => {
  //   setScale(1);
  // });

  return (
    <div
      className="cursor"
      style={{
        top: mouseY,
        left: mouseX,
        // transform: `scale(${scale})`,
        opacity: opacity,
      }}
    />
  );
}

export default Cursor;
