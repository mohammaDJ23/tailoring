import { GetServerSidePropsContext } from "next";
import { listsApis, serverApis } from "../../apis";
import { setLists, setPantsDetails, setShirtDetails } from "../../redux/actions";
import { Rest } from "../../services";
import { ListRes, List, ListObj, ServerProps, ShirtListObj, PantsListObj, Server, ShirtObj, PantsObj } from "../../types";
import { getAccessToken } from "../../utility";

export class UsersService<T extends ServerProps> {
  private async getDetails<T extends Partial<T>>(context: GetServerSidePropsContext, detailsType: number) {
    const accessToken = await getAccessToken(context);

    return new Rest().req<T>(serverApis[detailsType]({ accessToken, id: context.query?.id || "-1" }));
  }

  private async getList<T extends any[]>(context: GetServerSidePropsContext, listType: string): Promise<ListObj<T>> {
    const accessToken = await getAccessToken(context);

    const shirt = await new Rest().req<ListRes<T>>(listsApis[listType]({ accessToken, page: 1 }));

    const list: ListObj<T> = {
      list: {
        [1]: shirt.list
      },

      max: shirt.max,
      current: 1
    };

    return list;
  }

  async userShirtDetails({ store, context }: T) {
    const shirt = await this.getDetails<ShirtObj>(context, Server.SHIRT_DETAILS);

    store.dispatch(setShirtDetails(shirt));
  }

  async userPantsDetails({ store, context }: T) {
    const pant = await this.getDetails<PantsObj>(context, Server.PANTS_DETAILS);

    store.dispatch(setPantsDetails(pant));
  }

  async getPantsList({ store, context }: T) {
    const pantsList = await this.getList<PantsListObj[]>(context, List.PANTS);

    store.dispatch(setLists({ [List.PANTS]: pantsList }));
  }

  async getShirtList({ store, context }: T) {
    const shirtList = await this.getList<ShirtListObj[]>(context, List.SHIRT);

    store.dispatch(setLists({ [List.SHIRT]: shirtList }));
  }
}
