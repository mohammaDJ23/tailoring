import { serverSideProps, editController } from "../../../../@tailoring/servers";
import { asyncImport } from "../../../../@tailoring/utility";

export default asyncImport({
  component: () => import("../../../../modules/edit/shirt"),
  tabTitle: "Edit Shirt"
});

export const getServerSideProps = serverSideProps(editController.editShirt);
