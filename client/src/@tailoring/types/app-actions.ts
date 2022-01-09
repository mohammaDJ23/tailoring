import { EnablingElementActions, FormActions, ListsActions, RequestProcessActions } from ".";

export type AppActions = RequestProcessActions | FormActions | EnablingElementActions | ListsActions;
