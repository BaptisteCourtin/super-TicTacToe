import React from "react";

import { Box } from "./Box";

export const Board = ({
  board,
  handleBoxClick,
  bigBoard,
  boardIdx,
  nextBoardId,
}) => {
  const style =
    bigBoard &&
    (bigBoard[boardIdx] === "X" ? "x" : bigBoard[boardIdx] === "O" ? "o" : "");

  const cliquable =
    nextBoardId === boardIdx
      ? "cliquable"
      : nextBoardId === 100
      ? "cliquable"
      : "";

  return (
    <div className={`board ${style} ${cliquable}`}>
      {board.map((value, idx) => {
        return (
          <Box
            key={idx}
            value={value}
            handleBoxClick={() => value === null && handleBoxClick(board, idx)}
          />
        );
      })}
    </div>
  );
};
