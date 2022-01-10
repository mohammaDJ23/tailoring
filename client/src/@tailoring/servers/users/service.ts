import { setLists } from "../../redux/actions";
import { List, ListObj, ServerProps } from "../../types";

export class UsersService<T extends ServerProps> {
  async userShiitDetails({}: T) {}

  async userPantsDetails({}: T) {}

  async getPantsList({ store }: T) {
    const pants: ListObj = {
      list: {
        [1]: [
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
        ]
      },

      max: 3,
      current: 1
    };

    store.dispatch(setLists({ [List.PANTS]: pants }));
  }

  async getShirtList({ store }: T) {
    const shirt: ListObj = {
      list: {
        [1]: [
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
        ]
      },

      max: 3,
      current: 1
    };

    store.dispatch(setLists({ [List.SHIRT]: shirt }));
  }
}
