import React from "react";

import { Box } from "./Box";

export const Board = ({
  boardIdx,
  handleBoxClick,
  nextBoardId,
  board,
  winBoard,
}) => {
  const style =
    winBoard[boardIdx] === "X" ? "x" : winBoard[boardIdx] === "O" ? "o" : "";

  const cliquable =
    nextBoardId === boardIdx
      ? "cliquable"
      : nextBoardId === 100
      ? "cliquable"
      : "";

  return (
    board && (
      <div className={`board ${style} ${cliquable}`}>
        {board.map((eachValue, idx) => {
          return (
            <Box
              key={idx}
              value={eachValue}
              handleBoxClick={() =>
                eachValue === null && handleBoxClick(boardIdx, idx)
              }
            />
          );
        })}
      </div>
    )
  );
};
