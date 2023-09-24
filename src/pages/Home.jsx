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

  const [board1, setBoard1] = useState(Array(9).fill(null));
  const [board2, setBoard2] = useState(Array(9).fill(null));
  const [board3, setBoard3] = useState(Array(9).fill(null));

  const [board4, setBoard4] = useState(Array(9).fill(null));
  const [board5, setBoard5] = useState(Array(9).fill(null));
  const [board6, setBoard6] = useState(Array(9).fill(null));

  const [board7, setBoard7] = useState(Array(9).fill(null));
  const [board8, setBoard8] = useState(Array(9).fill(null));
  const [board9, setBoard9] = useState(Array(9).fill(null));

  const [nextBoardId, setNextBoardId] = useState(100);
  const [congrats, setCongrats] = useState(); // 100 de base pour pouvoir tout cliquer

  const [scores, setScores] = useState({ xScore: 0, oScore: 0 });
  const [bigBoard, setBigBoard] = useState(Array(9).fill(null));
  const [bigGameOver, setBigGameOver] = useState(false);

  // à chaque fois qu'une petite box est cliqué
  const handleBoxClick = (board, boxIdx) => {
    // se lance quand le switch trouve la bonne board
    const updatedBoard = board.map((value, idx) => {
      if (idx === boxIdx) {
        // si index de la box === index de la box touché
        return xPlaying ? "X" : "O";
        // X ou O suivant qui joue
      } else {
        return value;
      }
    });

    // pour que le seul board cliquable soit le bon
    setNextBoardId(boxIdx);

    // trouve la board qui à été utilisé
    switch (board) {
      case board1:
        setBoard1(updatedBoard);
        checkBoardFinish(0, updatedBoard);
        break;
      case board2:
        setBoard2(updatedBoard);
        checkBoardFinish(1, updatedBoard);
        break;
      case board3:
        setBoard3(updatedBoard);
        checkBoardFinish(2, updatedBoard);
        break;

      case board4:
        setBoard4(updatedBoard);
        checkBoardFinish(3, updatedBoard);
        break;
      case board5:
        setBoard5(updatedBoard);
        checkBoardFinish(4, updatedBoard);
        break;
      case board6:
        setBoard6(updatedBoard);
        checkBoardFinish(5, updatedBoard);
        break;

      case board7:
        setBoard7(updatedBoard);
        checkBoardFinish(6, updatedBoard);
        break;
      case board8:
        setBoard8(updatedBoard);
        checkBoardFinish(7, updatedBoard);
        break;
      case board9:
        setBoard9(updatedBoard);
        checkBoardFinish(8, updatedBoard);
        break;

      default:
        break;
    }
  };

  // Check if either player has won the board
  const checkBoardFinish = (indexBoard, updatedBoard) => {
    if (bigBoard[indexBoard] === null) {
      // si pas déjà de gagnant
      const winner = checkWinner(updatedBoard); // check if mini board win --- "X" ou "O"

      if (winner) {
        const updatedBigBoard = bigBoard.map((value, idxB) => {
          if (idxB === indexBoard) {
            // si index de la box === index de la box touché
            return winner;
            // X ou O suivant qui joue (winner)
          } else {
            return value;
          }
        });

        setBigBoard(updatedBigBoard);

        // check si jeu fini (big board gagné)
        const Bigwinner = checkWinner(updatedBigBoard); // check if mini board win --- "X" ou "O"
        if (Bigwinner) {
          setBigGameOver(true);

          if (Bigwinner === "O") {
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
    setBoard1(Array(9).fill(null));
    setBoard2(Array(9).fill(null));
    setBoard3(Array(9).fill(null));

    setBoard4(Array(9).fill(null));
    setBoard5(Array(9).fill(null));
    setBoard6(Array(9).fill(null));

    setBoard7(Array(9).fill(null));
    setBoard8(Array(9).fill(null));
    setBoard9(Array(9).fill(null));

    setBigBoard(Array(9).fill(null));

    setNextBoardId(100);
    setBigGameOver(false);
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
        <Board
          board={board1}
          handleBoxClick={handleBoxClick}
          bigBoard={bigBoard}
          boardIdx={0}
          nextBoardId={nextBoardId}
        />
        <Board
          board={board2}
          handleBoxClick={handleBoxClick}
          bigBoard={bigBoard}
          boardIdx={1}
          nextBoardId={nextBoardId}
        />
        <Board
          board={board3}
          handleBoxClick={handleBoxClick}
          bigBoard={bigBoard}
          boardIdx={2}
          nextBoardId={nextBoardId}
        />

        <Board
          board={board4}
          handleBoxClick={handleBoxClick}
          bigBoard={bigBoard}
          boardIdx={3}
          nextBoardId={nextBoardId}
        />
        <Board
          board={board5}
          handleBoxClick={handleBoxClick}
          bigBoard={bigBoard}
          boardIdx={4}
          nextBoardId={nextBoardId}
        />
        <Board
          board={board6}
          handleBoxClick={handleBoxClick}
          bigBoard={bigBoard}
          boardIdx={5}
          nextBoardId={nextBoardId}
        />

        <Board
          board={board7}
          handleBoxClick={handleBoxClick}
          bigBoard={bigBoard}
          boardIdx={6}
          nextBoardId={nextBoardId}
        />
        <Board
          board={board8}
          handleBoxClick={handleBoxClick}
          bigBoard={bigBoard}
          boardIdx={7}
          nextBoardId={nextBoardId}
        />
        <Board
          board={board9}
          handleBoxClick={handleBoxClick}
          bigBoard={bigBoard}
          boardIdx={8}
          nextBoardId={nextBoardId}
        />
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
