import { setLists } from "../../redux/actions";
import { ServerProps } from "../../types";

export class UsersService<T extends ServerProps> {
  async userShiitDetails({}: T) {}

  async userPantsDetails({}: T) {}

  async getPantsList({ store }: T) {
    const pantsList = [
      { id: 1, name: "Mohammad nowresideh" },
      { id: 2, name: "Mohammad nowresideh" },
      { id: 3, name: "Mohammad nowresideh" },
      { id: 4, name: "Mohammad nowresideh" },
      { id: 5, name: "Mohammad nowresideh" },
      { id: 6, name: "Mohammad nowresideh" },
      { id: 7, name: "Mohammad nowresideh" },
      { id: 8, name: "Mohammad nowresideh" },
      { id: 9, name: "Mohammad nowresideh" },
      { id: 10, name: "Mohammad nowresideh" }
    ];

    store.dispatch(setLists({ pantsList }));
  }

  async getShirtList({ store }: T) {
    const shirtList = [
      { id: 1, name: "Mohammad nowresideh" },
      { id: 2, name: "Mohammad nowresideh" },
      { id: 3, name: "Mohammad nowresideh" },
      { id: 4, name: "Mohammad nowresideh" },
      { id: 5, name: "Mohammad nowresideh" },
      { id: 6, name: "Mohammad nowresideh" },
      { id: 7, name: "Mohammad nowresideh" },
      { id: 8, name: "Mohammad nowresideh" },
      { id: 9, name: "Mohammad nowresideh" },
      { id: 10, name: "Mohammad nowresideh" }
    ];

    store.dispatch(setLists({ shirtList }));
  }
}
