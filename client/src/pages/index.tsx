import { initialController, serverSideProps } from "../@tailoring/servers";
import { asyncImport } from "../@tailoring/utility";

export default asyncImport({
  component: () => import("../modules/initial"),
  tabTitle: "Tailoring"
});

export const getServerSideProps = serverSideProps(initialController.initial);
