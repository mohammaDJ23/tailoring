import { asyncImport } from "../../../@tailoring/utility";
import { authController, serverSideProps } from "../../../@tailoring/servers";

export default asyncImport({
  component: () => import("../../../modules/auth/login"),
  tabTitle: "Login"
});

export const getServerSideProps = serverSideProps(authController.login);
