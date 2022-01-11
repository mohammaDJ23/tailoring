import { FC } from "react";
import * as C from "./styles";

const Spinner: FC = () => {
  return (
    <C.content className="container">
      <svg viewBox="0 0 100 100">
        <defs>
          <filter id="shadow">
            <feDropShadow dx="0" dy="0" stdDeviation="1.5" floodColor="var(--default-color)" />
          </filter>
        </defs>
        <circle
          className="spinner"
          style={{ fill: "transparent", stroke: "var(--default-color)", strokeWidth: "10px", strokeLinecap: "round", filter: "url(#shadow)" }}
          cx="50"
          cy="50"
          r="45"
        />
      </svg>
    </C.content>
  );
};

export default Spinner;
