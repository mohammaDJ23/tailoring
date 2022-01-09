import { NextPage } from "next";
import AppContainer from "../../../../@tailoring/shared/components/app-container";
import List from "./list";

const Shirt: NextPage = () => {
  return (
    <AppContainer>
      <List />
    </AppContainer>
  );
};

export default Shirt;
