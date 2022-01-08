import { serverSideProps, usersController } from "../../../@tailoring/servers";
import { asyncImport } from "../../../@tailoring/utility";

export default asyncImport({
  component: () => import("../../../modules/users/details"),
  tabTitle: "User details"
});

export const getServerSideProps = serverSideProps(usersController.details);
