import { serverSideProps, usersController } from "../../../../@tailoring/servers";
import { asyncImport } from "../../../../@tailoring/utility";

export default asyncImport({
  component: import("../../../../modules/users/list/pants"),
  tabTitle: "Pants list"
});

export const getServerSideProps = serverSideProps(usersController.getPantsList);
