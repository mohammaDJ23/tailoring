import { FC } from "react";
import AuthenticationContainer from "../../../../@tailoring/shared/components/authentication-contianer";
import Inputs from "../inputs";

const Container: FC = () => {
  return (
    <AuthenticationContainer>
      <Inputs />
    </AuthenticationContainer>
  );
};

export default Container;
