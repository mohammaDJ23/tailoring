import { setLists, setPantsDetails, setShirtDetails } from "../../redux/actions";
import { List, ListObj, ServerProps } from "../../types";

export class UsersService<T extends ServerProps> {
  async userShirtDetails({ store, context }: T) {
    const list = [
      { id: 1, name: "Mohammad nowresideh", height: 12, shoulder: 12, sleeve: 13, sleeveRing: 12, armpit: 54, chest: 45, collar: 12 },
      { id: 2, name: "Mohammad nowresideh", height: 12, shoulder: 12, sleeve: 13, sleeveRing: 12, armpit: 54, chest: 45, collar: 12 },
      { id: 3, name: "Mohammad nowresideh", height: 12, shoulder: 12, sleeve: 13, sleeveRing: 12, armpit: 54, chest: 45, collar: 12 },
      { id: 4, name: "Mohammad nowresideh", height: 12, shoulder: 12, sleeve: 13, sleeveRing: 12, armpit: 54, chest: 45, collar: 12 },
      { id: 5, name: "Mohammad nowresideh", height: 12, shoulder: 12, sleeve: 13, sleeveRing: 12, armpit: 54, chest: 45, collar: 12 },
      { id: 6, name: "Mohammad nowresideh", height: 12, shoulder: 12, sleeve: 13, sleeveRing: 12, armpit: 54, chest: 45, collar: 12 },
      { id: 7, name: "Mohammad nowresideh", height: 12, shoulder: 12, sleeve: 13, sleeveRing: 12, armpit: 54, chest: 45, collar: 12 },
      { id: 8, name: "Mohammad nowresideh", height: 12, shoulder: 12, sleeve: 13, sleeveRing: 12, armpit: 54, chest: 45, collar: 12 },
      { id: 9, name: "Mohammad nowresideh", height: 12, shoulder: 12, sleeve: 13, sleeveRing: 12, armpit: 54, chest: 45, collar: 12 },
      { id: 10, name: "Mohammad nowresideh", height: 12, shoulder: 12, sleeve: 13, sleeveRing: 12, armpit: 54, chest: 45, collar: 12 }
    ];

    const id = context.query.id as string;

    const shirt = list.find(shirt => shirt.id === +id);

    store.dispatch(setShirtDetails(shirt));
  }

  async userPantsDetails({ store, context }: T) {
    const list = [
      { id: 1, name: "Mohammad nowresideh", height: 12, waist: 12, seat: 13, thight: 12, knee: 54, pantSlipper: 45, hip: 12 },
      { id: 2, name: "Mohammad nowresideh", height: 12, waist: 12, seat: 13, thight: 12, knee: 54, pantSlipper: 45, hip: 12 },
      { id: 3, name: "Mohammad nowresideh", height: 12, waist: 12, seat: 13, thight: 12, knee: 54, pantSlipper: 45, hip: 12 },
      { id: 4, name: "Mohammad nowresideh", height: 12, waist: 12, seat: 13, thight: 12, knee: 54, pantSlipper: 45, hip: 12 },
      { id: 5, name: "Mohammad nowresideh", height: 12, waist: 12, seat: 13, thight: 12, knee: 54, pantSlipper: 45, hip: 12 },
      { id: 6, name: "Mohammad nowresideh", height: 12, waist: 12, seat: 13, thight: 12, knee: 54, pantSlipper: 45, hip: 12 },
      { id: 7, name: "Mohammad nowresideh", height: 12, waist: 12, seat: 13, thight: 12, knee: 54, pantSlipper: 45, hip: 12 },
      { id: 8, name: "Mohammad nowresideh", height: 12, waist: 12, seat: 13, thight: 12, knee: 54, pantSlipper: 45, hip: 12 },
      { id: 9, name: "Mohammad nowresideh", height: 12, waist: 12, seat: 13, thight: 12, knee: 54, pantSlipper: 45, hip: 12 },
      { id: 10, name: "Mohammad nowresideh", height: 12, waist: 12, seat: 13, thight: 12, knee: 54, pantSlipper: 45, hip: 12 }
    ];

    const id = context.query.id as string;

    const pant = list.find(pant => pant.id === +id);

    store.dispatch(setPantsDetails(pant));
  }

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
