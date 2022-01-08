import { asyncImport } from "../../../@tailoring/utility";
import { creationController, serverSideProps } from "../../../@tailoring/servers";

export default asyncImport({
  component: () => import("../../../modules/creation/shirt"),
  tabTitle: "Create shirt"
});

export const getServerSideProps = serverSideProps(creationController.shirtCreation);
