import { asyncImport } from "../../../@tailoring/utility";
import { authController, serverSideProps } from "../../../@tailoring/servers";

export default asyncImport(() => import("../../../modules/auth/login"));

export const getServerSideProps = serverSideProps(authController.login);
