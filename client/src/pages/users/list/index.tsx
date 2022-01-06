import { serverSideProps, usersController } from "../../../@tailoring/servers";
import { asyncImport } from "../../../@tailoring/utility";

export default asyncImport(() => import("../../../modules/users/list"));

export const getServerSideProps = serverSideProps(usersController.list);
