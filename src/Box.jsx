import React from "react";

export default function Box(props) {
  const [on, seton] = React.useState(props.on);
  const bg = props.on ? "rgb(255, 122, 122)" : "transparent";
  const dis = props.id == props.random ? "YOU WON🎉 " : "";
  const display = props.on ? "" : dis;
  return (
    <div
      className="box col-md-2"
      style={{ backgroundColor: bg }}
      onClick={() => props.toggle(props.id)}
    >
      {display}
    </div>
  );
}
