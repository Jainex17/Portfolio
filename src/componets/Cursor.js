import React from 'react';
import '../index.css';

function Cursor(){

    document.addEventListener("mousemove", (e)=> {
        var cursor = document.querySelector(".cursor");
        cursor.style.top = e.clientY + "px";
        cursor.style.left = e.clientX + "px";
      });
    return(
        <div className='cursor'>
          
        </div>
    );
}

export default Cursor