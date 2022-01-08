import { asyncImport } from "../../../@tailoring/utility";
import { authController, serverSideProps } from "../../../@tailoring/servers";

export default asyncImport({
  component: () => import("../../../modules/auth/signup"),
  tabTitle: "Signup"
});

export const getServerSideProps = serverSideProps(authController.signup);
