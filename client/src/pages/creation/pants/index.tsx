import { asyncImport } from "../../../@tailoring/utility";
import { creationController, serverSideProps } from "../../../@tailoring/servers";

export default asyncImport({
  component: () => import("../../../modules/creation/pants"),
  tabTitle: "Create pants"
});

export const getServerSideProps = serverSideProps(creationController.pantsCreation);
