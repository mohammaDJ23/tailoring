import { initialController, serverSideProps } from "../@tailoring/servers";
import { asyncImport } from "../@tailoring/utility";

export default asyncImport(() => import("../modules/initial"));

export const getServerSideProps = serverSideProps(initialController.initial);
