import { FC } from "react";
import * as C from "./styles";
import SideNavigation from "../side-navigation";
import Card from "../card";
import HeadNavigation from "../head-navigation";

const AppContainer: FC = ({ children }) => {
  return (
    <>
      <SideNavigation />

      <C.content className="full-screen">
        <HeadNavigation />

        <C.content className="app-container full-screen">
          <C.content className="wh-100">
            <Card>
              <C.content className="app-content wh-100">{children}</C.content>
            </Card>
          </C.content>
        </C.content>
      </C.content>
    </>
  );
};

export default AppContainer;
