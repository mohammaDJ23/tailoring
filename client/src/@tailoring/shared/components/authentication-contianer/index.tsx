import Card from "../card";
import { FC } from "react";
import * as C from "./styles";

const AuthenticationContainer: FC = ({ children }) => {
  return (
    <C.content className="wh-100">
      <C.content className="wh-100 p-3 d-flex flex-column justify-content-center align-items-center container-content">
        <Card>{children}</Card>
      </C.content>
    </C.content>
  );
};

export default AuthenticationContainer;
