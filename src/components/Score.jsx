import React from "react";
import Timer from "./Timer";

export const Score = ({
  scores,
  xPlaying,
  pauseAllTimer,
  restartAllTimer,
  pauseThisTimer,
  timerEnded,
  noTimer,

  easy,
}) => {
  const { xScore, oScore } = scores;

  return (
    <div className="scoreboard">
      <span className={`score x-score ${!xPlaying && "inactive"}`}>
        X - {xScore}
        {!easy && !noTimer && (
          <Timer
            pauseAllTimer={pauseAllTimer}
            restartAllTimer={restartAllTimer}
            pauseThisTimer={pauseThisTimer}
            timerEnded={timerEnded}
          />
        )}
      </span>
      <span className={`score o-score ${xPlaying && "inactive"}`}>
        O - {oScore}
        {!easy && !noTimer && (
          <Timer
            pauseAllTimer={pauseAllTimer}
            restartAllTimer={restartAllTimer}
            pauseThisTimer={!pauseThisTimer}
            timerEnded={timerEnded}
          />
        )}
      </span>
    </div>
  );
};
