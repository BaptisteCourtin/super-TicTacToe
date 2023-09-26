import React, { useEffect } from "react";
import { useTimer } from "react-timer-hook";

const Timer = ({
  pauseAllTimer,
  restartAllTimer,
  pauseThisTimer,
  timerEnded,
  timeTimer,
}) => {
  const expiryTimestamp = new Date();
  expiryTimestamp.setSeconds(expiryTimestamp.getSeconds() + timeTimer);

  const { seconds, minutes, start, pause, resume, restart } = useTimer({
    expiryTimestamp,
    onExpire: () => timerEnded(),
  });

  useEffect(() => {
    pause();
  }, [pauseAllTimer]);

  useEffect(() => {
    const time = new Date();
    time.setSeconds(time.getSeconds() + timeTimer);
    restart(time);
    pause();
  }, [restartAllTimer, timeTimer]);

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
