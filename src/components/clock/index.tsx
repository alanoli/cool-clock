import React from "react";
import PointerBar from "../pointer-bar";

const Clock = () => {
  return (
    <div className="flex gap-4">
      <PointerBar cursorMaxPosition={2} />
      <PointerBar cursorMaxPosition={9} />
      :
      <PointerBar cursorMaxPosition={5} />
      <PointerBar cursorMaxPosition={9} />
      :
      <PointerBar cursorMaxPosition={5} />
      <PointerBar cursorMaxPosition={9} />
    </div>
  );
};

export default Clock;
