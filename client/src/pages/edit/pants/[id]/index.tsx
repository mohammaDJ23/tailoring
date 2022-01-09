import { serverSideProps, editController } from "../../../../@tailoring/servers";
import { asyncImport } from "../../../../@tailoring/utility";

export default asyncImport({
  component: () => import("../../../../modules/edit/pants"),
  tabTitle: "Edit pants"
});

export const getServerSideProps = serverSideProps(editController.editPants);
