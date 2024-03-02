import { useEffect, useState } from "react";
import { BaseProps } from "../types";

export default function UseEffectDemo({ title }: BaseProps) {
  const [count, setCount] = useState(0);
  const [isIntervalRunning, setIsIntervalRunning] = useState(true);

  useEffect(() => {
    let intervalId: number;

    if (isIntervalRunning) {
      intervalId = window.setInterval(() => {
        setCount((prev) => prev + 1);
      }, 1000);
    }

    return () => window.clearInterval(intervalId);
  }, [isIntervalRunning]);

  const toggleInterval = () => {
    setIsIntervalRunning((prev) => !prev);
  };

  return (
    <>
      <h2>{title}</h2>
      <p>{count}</p>
      <button onClick={toggleInterval}>
        {isIntervalRunning ? "Stop Interval" : "Start Interval"}
      </button>
    </>
  );
}
