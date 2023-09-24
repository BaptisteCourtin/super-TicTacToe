import React from "react";

import { Box } from "./Box";

export const NormalBoard = ({ handleBoxClick, board }) => {
  return (
    board && (
      <div className="board cliquable">
        {board.map((eachValue, idx) => {
          return (
            <Box
              key={idx}
              value={eachValue}
              handleBoxClick={() => eachValue === null && handleBoxClick(idx)}
            />
          );
        })}
      </div>
    )
  );
};
