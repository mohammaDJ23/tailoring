import { ReactNode } from "react";
import ReactDOM from "react-dom";

export function reactPortal(child: ReactNode, parent: Element) {
  return ReactDOM.createPortal(child, parent);
}
