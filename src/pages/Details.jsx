import React from "react";

function Details() {
  return (
    <div className="details">
      <h1>How to play ?</h1>

      <h2>What you need</h2>
      <ul>
        <li>2 players on the same device</li>
        <li>And approximatively 10 minutes.</li>
      </ul>

      <h2>What is this strange board ?</h2>
      <ul>
        <li>A super tic tac toe. It's 9 boards of normal tic tac toe.</li>
        <li>
          When a player win a board his symbole while be display in big on the
          board.
        </li>
      </ul>

      <h2>What is the goal ?</h2>
      <ul>
        <li>Win the big board.</li>
        <li>You don't have to win every normal board. Just 3 align win.</li>
      </ul>

      <h2>How to start</h2>
      <ul>
        <li>First player put his X somewhere on the board.</li>
      </ul>

      <h2>How to continue</h2>
      <ul>
        <li>The board which is now colored is where you can play.</li>
        <li>It's NOT random.</li>
        <li>
          Where you place your symbol on the board is the location of next board
          you will play with.
        </li>
        <li>
          For example, if I place a X in the top-right of middle board, next
          player will have to put an O somewhere on the top-right board.
        </li>
      </ul>

      <h2>Specifications</h2>
      <ul>
        <li>
          If the next move is on a board that is already complete, every boards
          will be availables.
        </li>
        <li>
          If you play with the timer, the timer will start at the first action.
        </li>
        <li>
          If you pause the timer, the timer will restart at the next action.
        </li>
      </ul>
    </div>
  );
}

export default Details;
