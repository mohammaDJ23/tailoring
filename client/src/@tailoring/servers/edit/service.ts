import { GetServerSidePropsContext } from "next";
import { serverApis } from "../../apis";
import { editPants, editShirt } from "../../models";
import { setForms } from "../../redux/actions";
import { Rest } from "../../services";
import { DetailsObj, Form, Server, ServerProps } from "../../types";
import { getAccessToken } from "../../utility";

export class EditService<T extends ServerProps> {
  private async getDetails<T extends Partial<T>>(context: GetServerSidePropsContext, detailsType: number) {
    const accessToken = await getAccessToken(context);

    return new Rest().req<T>(serverApis[detailsType]({ accessToken, id: context.query?.id || "-1" }));
  }

  async editPants({ store, context }: T) {
    const pants = await this.getDetails<DetailsObj["pants"]>(context, Server.PANTS_DETAILS);

    for (const key in pants) {
      // @ts-ignore

      editPants[Form.EDIT_PANTS][key].value = pants[key];
    }

    store.dispatch(setForms([editPants]));
  }

  async editShirt({ store, context }: T) {
    const shirt = await this.getDetails<DetailsObj["shirt"]>(context, Server.SHIRT_DETAILS);

    for (const key in shirt) {
      // @ts-ignore

      editShirt[Form.EDIT_SHIRT][key].value = shirt[key];
    }

    store.dispatch(setForms([editShirt]));
  }
}
