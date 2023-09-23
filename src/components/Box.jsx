import React from "react";

export const Box = ({ value, handleBoxClick }) => {
  const style = value === "X" ? "x" : value === "O" ? "o" : "";

  return (
    <button className={`box ${style}`} onClick={handleBoxClick}>
      {value}
    </button>
  );
};
