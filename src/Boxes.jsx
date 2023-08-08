import React from "react";
import Data from "./data";
import Box from "./Box";
export default function Boxes({ random }) {
  const [squares, setSquares] = React.useState(Data);
  console.log(random);
  function toggle(id) {
    setSquares((prev) => {
      return prev.map((x) => {
        return x.id === id ? { ...x, on: !x.on } : { ...x, on: true };
      });
    });
  }
  const display = squares.map((x) => {
    return (
      <Box
        key={x.id}
        id={x.id}
        on={x.on}
        toggle={toggle}
        name={x.name}
        random={random}
      />
    );
  });
  return <div className="boxes row">{display}</div>;
}
