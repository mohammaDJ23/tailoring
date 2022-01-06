import { asyncImport } from "../../../@tailoring/utility";
import { authController, serverSideProps } from "../../../@tailoring/servers";

export default asyncImport(() => import("../../../modules/auth/login"), "Login");

export const getServerSideProps = serverSideProps(authController.login);
