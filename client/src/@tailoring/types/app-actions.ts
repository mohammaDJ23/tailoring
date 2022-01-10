import { EnablingElementActions, FormActions, ListsActions, RequestProcessActions, SearchQueryActions } from ".";

export type AppActions = RequestProcessActions | FormActions | EnablingElementActions | ListsActions | SearchQueryActions;
