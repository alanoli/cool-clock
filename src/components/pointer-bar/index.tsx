import React from "react";
import { PointerBarProp } from "../../utils/types";

const PointerBar: React.FC<PointerBarProp> = ({
  cursorMaxPosition,
  offsetPosition,
}) => {
  let offset = `${198 + parseInt(offsetPosition) * 44 * -1}px`;

  return (
    <div
      className={`flex flex-col items-center justify-start gap-1 p-3 mb-auto ease-out duration-300 rounded-lg shadow-2xl backdrop-blur-sm`}
      style={{ transform: `translate(0,${offset})` }}
    >
      {[...Array(cursorMaxPosition + 1).keys()].map((item) => {
        return (
          <div
            className={`${
              item == parseInt(offsetPosition)
                ? "w-12 h-12 text-3xl text-gray-800"
                : "w-10 h-10 text-gray-400"
            } flex items-center justify-center rounded-full bg-slate-200`}
            // style={{
            //   background:
            //     "radial-gradient(circle at 100%, #e66465 0%, #e66465 50%, #fff 100%)",
            // }}
          >
            <p>{item}</p>
          </div>
        );
      })}
    </div>
  );
};

export default PointerBar;
