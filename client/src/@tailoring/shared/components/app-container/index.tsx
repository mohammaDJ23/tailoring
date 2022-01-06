import { FC } from "react";
import * as C from "./styles";
import SideNavigation from "../side-navigation";

const AppContainer: FC = ({ children }) => {
  return (
    <>
      <SideNavigation />

      <C.content className="app-container full-screen">{children}</C.content>
    </>
  );
};

export default AppContainer;
