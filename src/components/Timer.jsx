import React, { useEffect } from "react";
import { useTimer } from "react-timer-hook";

const Timer = ({
  pauseAllTimer,
  restartAllTimer,
  pauseThisTimer,
  timerEnded,
}) => {
  const expiryTimestamp = new Date();
  expiryTimestamp.setSeconds(expiryTimestamp.getSeconds() + 600);

  const { seconds, minutes, start, pause, resume, restart } = useTimer({
    expiryTimestamp,
    onExpire: () => timerEnded(),
  });

  useEffect(() => {
    pause();
  }, [pauseAllTimer]);

  useEffect(() => {
    const time = new Date();
    time.setSeconds(time.getSeconds() + 600);
    restart(time);
    pause();
  }, [restartAllTimer]);

  useEffect(() => {
    if (pauseThisTimer) {
      pause();
    } else {
      resume();
    }
  }, [pauseThisTimer]);

  return (
    <div>
      <span>{minutes}</span>:<span>{seconds}</span>
    </div>
  );
};

export default Timer;
