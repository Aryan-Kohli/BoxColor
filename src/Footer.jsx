import React from "react";

export default function Footer() {
  function loadd() {
    location.reload();
  }
  return (
    <div className="Footer">
      <div className="ftext"></div>
      <button className="playagain" onClick={loadd}>
        PLAY AGAIN
      </button>
    </div>
  );
}
