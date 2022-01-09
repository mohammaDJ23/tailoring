import { ReactNode } from "react";
import ReactDOM from "react-dom";

class ReactPortal {
  create(child: ReactNode, parent: Element) {
    return ReactDOM.createPortal(child, parent);
  }
}

export const reactPortal = new ReactPortal();
