import React from "react";
import { PointerBarProp } from "../../utils/types";

const PointerBar: React.FC<PointerBarProp> = ({ cursorMaxPosition }) => {
  return (
    <div className="flex flex-col gap-4 p-4 bg-slate-100 m-auto">
      {[...Array(cursorMaxPosition + 1).keys()].map((item) => {
        return <p className="bg-slate-200 p-4">{item}</p>;
      })}
    </div>
  );
};

export default PointerBar;
