import React from "react";
import PointerBar from "../pointer-bar";

const Clock = () => {
  return (
    <>
      <div className="absolute border-solid border-2 border-black w-screen h-14" />
      <div className="flex gap-4">
        <PointerBar cursorMaxPosition={2} offsetPosition={1.59} />
        <PointerBar cursorMaxPosition={9} offsetPosition={5} />
        <div className="m-auto text-4xl">:</div>
        <PointerBar cursorMaxPosition={5} offsetPosition={3} />
        <PointerBar cursorMaxPosition={9} offsetPosition={5} />
        <div className="m-auto text-4xl">:</div>
        <PointerBar cursorMaxPosition={5} offsetPosition={3} />
        <PointerBar cursorMaxPosition={9} offsetPosition={5} />
      </div>
    </>
  );
};

export default Clock;

// <PointerBar cursorMaxPosition={2} offsetPosition={2} />
// <PointerBar cursorMaxPosition={9} offsetPosition={5} />
// <div className="m-auto text-4xl">:</div>
// <PointerBar cursorMaxPosition={5} offsetPosition={3} />
// <PointerBar cursorMaxPosition={9} offsetPosition={5} />
// <div className="m-auto text-4xl">:</div>
// <PointerBar cursorMaxPosition={5} offsetPosition={3} />
// <PointerBar cursorMaxPosition={9} offsetPosition={5} />
