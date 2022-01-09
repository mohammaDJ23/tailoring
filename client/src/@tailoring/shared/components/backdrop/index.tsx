import { FC } from "react";
import { useAction, useState } from "../../hooks";
import { Transition } from "react-transition-group";
import * as C from "./styles";
import { Element } from "../../../types";
import { reactPortal } from "../../../utility";

const defaultStyles = {
  opacity: 0,
  visibility: "hidden"
};

const transitionStyles = {
  entering: { opacity: 1, visibility: "visible" },
  entered: { opacity: 1, visibility: "visible" },
  exiting: { opacity: 0, visibility: "hidden" },
  exited: { opacity: 0, visibility: "hidden" }
};

const Backdrop: FC = () => {
  const { enablingElementReducer } = useState();
  const { enablingElement } = useAction();

  return reactPortal.create(
    <Transition in={enablingElementReducer.elementName === Element.NAVIGATION} timeout={400}>
      {state => (
        <C.content
          style={{
            ...defaultStyles,

            // @ts-ignore

            ...transitionStyles[state]
          }}
          className="wh-100 backdrop position-fixed hover"
          onClick={() => enablingElement("")}
        />
      )}
    </Transition>,

    document.querySelector("#backdrop")!
  );
};

export default Backdrop;
