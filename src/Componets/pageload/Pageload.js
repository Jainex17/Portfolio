import React from "react";
import "./Pageload.css";
import $ from "jquery";

function Pageload() {
  $(window).on("load", function () {
    setTimeout(function () {
      $(".page-load").fadeOut("slow");
    }, 3000);
  });

  // const body = document.querySelector('body');
  //     window.onload = function() {
  //         const pageload = document.querySelector('.page-load')
  //         setTimeout(() => {
  //             $('.pageload').fadeOut('slow');
  //             // pageload.classList.add('fade')
  //           }, 3000);
  //   }
  return (
    <div className="page-load">
      <h1>JAINEX</h1>
    </div>
  );
}

export default Pageload;
