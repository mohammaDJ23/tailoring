import { asyncImport } from "../../../@tailoring/utility";
import { creationController, serverSideProps } from "../../../@tailoring/servers";

export default asyncImport(() => import("../../../modules/creation/shirt"), "Create shirt");

export const getServerSideProps = serverSideProps(creationController.shirtCreation);
