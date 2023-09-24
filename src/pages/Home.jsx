import React, { useState } from "react";

import { Board } from "../components/Board";
import { Score } from "../components/Score";

function Home() {
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
  const [nextBoardId, setNextBoardId] = useState(100);

  const [congrats, setCongrats] = useState(); // 100 de base pour pouvoir tout cliquer
  const [scores, setScores] = useState({ xScore: 0, oScore: 0 });
  const [gameOver, setGameOver] = useState(false);

  const [myBigBoard, setMyBigBoard] = useState(
    Array(9).fill(Array(9).fill(null))
  );
  const [winBoard, setWinBoard] = useState(Array(9).fill(null));

  // à chaque fois qu'une petite box est cliqué
  const handleBoxClick = (boardIdx, boxIdx) => {
    // se lance quand le switch trouve la bonne board
    const updatedBoard = myBigBoard[boardIdx].map((value, idx) => {
      if (idx === boxIdx) {
        // si index de la box === index de la box touché
        return xPlaying ? "X" : "O";
        // X ou O suivant qui joue
      } else {
        return value;
      }
    });

    // pour vérifier si au moins valeur du board n'est pas null
    let isNotFull = myBigBoard[boxIdx].some((each) => each === null); // true si au moins une valeur null
    if (!isNotFull) {
      boxIdx = 100;
    }

    // pour que le seul board cliquable soit le bon
    setNextBoardId(boxIdx);

    let newArr = [...myBigBoard];
    newArr[boardIdx] = updatedBoard;
    setMyBigBoard(newArr);

    checkBoardFinish(boardIdx, updatedBoard);
  };

  // Check if either player has won the board
  const checkBoardFinish = (indexBoard, updatedBoard) => {
    if (winBoard[indexBoard] === null) {
      // si pas déjà de gagnant
      const winner = checkWinner(updatedBoard); // check if mini board win --- "X" ou "O"

      if (winner) {
        const updatedWinBoard = winBoard.map((value, idxB) => {
          if (idxB === indexBoard) {
            // si index de la box === index de la box touché
            return winner;
            // X ou O suivant qui joue (winner)
          } else {
            return value;
          }
        });

        setWinBoard(updatedWinBoard);

        // check si jeu fini (big board gagné)
        const theWinner = checkWinner(updatedWinBoard); // check if mini board win --- "X" ou "O"
        if (theWinner) {
          setGameOver(true);

          if (theWinner === "O") {
            let { oScore } = scores;
            oScore += 1;
            setScores({ ...scores, oScore });
          } else {
            let { xScore } = scores;
            xScore += 1;
            setScores({ ...scores, xScore });
          }

          // arrêter le jeu et ne plus pouvoir posé => pas de gagnant plusieurs fois
          setNextBoardId(400);
          setCongrats(`Well play ${xPlaying === true ? "X" : "O"}`);
        }
      }
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
    setMyBigBoard(Array(9).fill(Array(9).fill(null)));
    setWinBoard(Array(9).fill(null));

    setNextBoardId(100);
    setGameOver(false);
  };

  // reset les scores
  const resetScore = () => {
    setScores({ xScore: 0, oScore: 0 });
  };

  // -------------------------------------------------------------------------------------------------

  return (
    <div className="home">
      <h1>SUPER Tic Tac Toe</h1>
      <Score scores={scores} xPlaying={xPlaying} />

      <section className="all-boards">
        {myBigBoard.map((each, idx) => {
          return (
            <Board
              key={idx}
              boardIdx={idx}
              winBoard={winBoard}
              handleBoxClick={handleBoxClick}
              nextBoardId={nextBoardId}
              board={each}
            />
          );
        })}
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

export default Home;
