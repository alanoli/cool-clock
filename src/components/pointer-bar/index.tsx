import React from "react";
import { PointerBarProp } from "../../utils/types";

import "./styles.css";

const PointerBar: React.FC<PointerBarProp> = ({
  cursorMaxPosition,
  offsetPosition,
}) => {
  let offset = `${offsetPosition * 45}px`;

  return (
    <div
      className={`flex flex-col gap-1 container p-3 bg-slate-100 m-auto`}
      style={{ transform: `translate(0,${offset})` }}
    >
      {[...Array(cursorMaxPosition + 1).keys()].map((item) => {
        return (
          <div className="items-start px-4 py-2 bg-slate-200">
            <p>{item}</p>
          </div>
        );
      })}
    </div>
  );
};

export default PointerBar;
