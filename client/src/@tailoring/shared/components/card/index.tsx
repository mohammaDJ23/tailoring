import { FC } from "react";
import * as C from "./styles";

const Card: FC = ({ children }) => {
  return <C.content className="w-100 box-shadow bg-white card-wrapper overflow-auto">{children}</C.content>;
};

export default Card;
