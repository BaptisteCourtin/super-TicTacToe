import React, { useState } from "react";

import { Board } from "../components/Board";
import { Score } from "../components/Score";

function Normal() {
  // les possibilitées pour gagner
  const WIN_CONDITIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],

    [0, 4, 8],
    [2, 4, 6],
  ];

  const [xPlaying, setXPlaying] = useState(true);

  const [congrats, setCongrats] = useState();
  const [scores, setScores] = useState({ xScore: 0, oScore: 0 });

  const [board, setBoard] = useState(Array(9).fill(null));
  const [gameOver, setGameOver] = useState(false);

  // à chaque fois qu'une petite box est cliqué
  const handleBoxClick = (board, boxIdx) => {
    const updatedBoard = board.map((value, idx) => {
      if (idx === boxIdx) {
        return xPlaying ? "X" : "O";
      } else {
        return value;
      }
    });

    // trouve la board qui à été utilisé
    setBoard(updatedBoard);
    checkBoardFinish(updatedBoard);
  };

  const checkBoardFinish = (updatedBoard) => {
    const winner = checkWinner(updatedBoard); // check if board win --- "X" ou "O"

    if (winner) {
      if (winner === "O") {
        let { oScore } = scores;
        oScore += 1;
        setScores({ ...scores, oScore });
      } else {
        let { xScore } = scores;
        xScore += 1;
        setScores({ ...scores, xScore });
      }

      setGameOver(true);
      // arrêter le jeu et ne plus pouvoir posé => pas de gagnant plusieurs fois
      setCongrats(`Well play ${xPlaying === true ? "X" : "O"}`);
    }

    // Change active player
    setXPlaying(!xPlaying);
  };

  const checkWinner = (board) => {
    for (let i = 0; i < WIN_CONDITIONS.length; i++) {
      const [x, y, z] = WIN_CONDITIONS[i];

      // Iterate through win conditions and check if either player satisfies them
      // x / y / z === numbers
      // board[x / y / z] === X ou O
      if (board[x] && board[x] === board[y] && board[x] === board[z]) {
        return board[x]; // return X ou O
      }
    }
  };

  // -------------------------------------------------------------------------------------------------

  // reset tout les boards
  const resetAllBoard = () => {
    setBoard(Array(9).fill(null));
    setCongrats("");
    setGameOver(false);
  };

  // reset les scores
  const resetScore = () => {
    setScores({ xScore: 0, oScore: 0 });
  };

  // -------------------------------------------------------------------------------------------------

  return (
    <div className="normal">
      <h1>NORMAL Tic Tac Toe</h1>
      <Score scores={scores} xPlaying={xPlaying} />

      <section className={`normal-board ${gameOver ? "over" : ""}`}>
        <Board board={board} handleBoxClick={handleBoxClick} />
      </section>

      <p className="congrats">{congrats}</p>

      <section className="all-reset">
        <button className="reset-btn" onClick={() => resetScore()}>
          Reset Score
        </button>
        <button className="reset-btn" onClick={() => resetAllBoard()}>
          Reset Board
        </button>
      </section>
    </div>
  );
}

export default Normal;
