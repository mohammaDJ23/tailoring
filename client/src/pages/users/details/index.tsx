import { serverSideProps, usersController } from "../../../@tailoring/servers";
import { asyncImport } from "../../../@tailoring/utility";

export default asyncImport(() => import("../../../modules/users/details"), "User details");

export const getServerSideProps = serverSideProps(usersController.details);
