import { NextPage } from "next";
import AppContainer from "../../../../@tailoring/shared/components/app-container";
import UserShirtDetails from "./user-shirt-details";

const Shirt: NextPage = () => {
  return (
    <AppContainer>
      <UserShirtDetails />
    </AppContainer>
  );
};

export default Shirt;
