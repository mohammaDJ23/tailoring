import { FC } from "react";
import AuthenticationContainer from "../../../../@tailoring/shared/components/authentication-contianer";
import Input from "../inputs";
import * as C from "./styles";

const Container: FC = () => {
  return (
    <AuthenticationContainer>
      <Input />
    </AuthenticationContainer>
  );
};

export default Container;
