import { NextPage } from "next";
import AppContainer from "../../../../@tailoring/shared/components/app-container";
import UserPantsDetails from "./user-pants-details";

const Pants: NextPage = () => {
  return (
    <AppContainer>
      <UserPantsDetails />
    </AppContainer>
  );
};

export default Pants;
