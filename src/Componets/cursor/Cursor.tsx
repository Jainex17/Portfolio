import "./cursor.css";

function Cursor() {

  var cursor : HTMLElement | null = document.querySelector(".cursor");
  let mouseX = "0px";
  let mouseY = "0px";

  document.addEventListener("mousemove", (e) => {
    if (cursor) {
      cursor.style.top = e.clientY - 15 + "px";
      cursor.style.left = e.clientX - 15 + "px";
    
      // cursor.style.top = e.clientY - 15 + "px";
      // cursor.style.left = e.clientX - 15 + "px";
   mouseX = `${e.clientX}px`;
    // cursor.style.transform = `translateX(${translateXValue})`;
   mouseY = `${e.clientY }px`;
    // cursor.style.transform = `translateY(${translateYValue})`;
    }
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
    left: mouseX
  }}
/>
  
  );
}

export default Cursor;
