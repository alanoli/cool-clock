import React, { useEffect, useState } from "react";
import PointerBar from "../pointer-bar";
import moment from "moment";

type TimeObject = {
  second: string;
  minute: string;
  hour: string;
};

const Clock = () => {
  const [time, setTime] = useState<TimeObject | null>(null);

  useEffect(() => {
    setInterval(() => {
      setTime({
        second: moment().format("ss"),
        minute: moment().format("mm"),
        hour: moment().format("hh"),
      });
    }, 1000);
  }, []);

  return (
    <>
      <div className="absolute w-screen h-14" />
      {time && (
        <div className="flex gap-4">
          <PointerBar cursorMaxPosition={2} offsetPosition={time.hour[0]} />
          <PointerBar cursorMaxPosition={9} offsetPosition={time.hour[1]} />
          <div
            className="text-8xl text-white"
            style={{ transform: `translate(0,175px)` }}
          >
            <p>:</p>
          </div>
          <PointerBar cursorMaxPosition={5} offsetPosition={time.minute[0]} />
          <PointerBar cursorMaxPosition={9} offsetPosition={time.minute[1]} />
          <div
            className="text-8xl text-white"
            style={{ transform: `translate(0,175px)` }}
          >
            <p>:</p>
          </div>
          <PointerBar cursorMaxPosition={9} offsetPosition={time.second[0]} />
          <PointerBar cursorMaxPosition={9} offsetPosition={time.second[1]} />
        </div>
      )}
    </>
  );
};

export default Clock;
