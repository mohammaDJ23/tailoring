import { editPants, editShirt } from "../../models";
import { setForms } from "../../redux/actions";
import { ServerProps } from "../../types";

export class EditService<T extends ServerProps> {
  async editPants({ store, context }: T) {
    const list = [
      { id: 1, name: "Mohammad nowresideh", height: 12, waist: 12, seat: 13, thight: 12, knee: 54, pantSlipper: 45, hip: 12, phone: "09174163042" },
      { id: 2, name: "Mohammad nowresideh", height: 12, waist: 12, seat: 13, thight: 12, knee: 54, pantSlipper: 45, hip: 12, phone: "09174163042" },
      { id: 3, name: "Mohammad nowresideh", height: 12, waist: 12, seat: 13, thight: 12, knee: 54, pantSlipper: 45, hip: 12, phone: "09174163042" },
      { id: 4, name: "Mohammad nowresideh", height: 12, waist: 12, seat: 13, thight: 12, knee: 54, pantSlipper: 45, hip: 12, phone: "09174163042" },
      { id: 5, name: "Mohammad nowresideh", height: 12, waist: 12, seat: 13, thight: 12, knee: 54, pantSlipper: 45, hip: 12, phone: "09174163042" },
      { id: 6, name: "Mohammad nowresideh", height: 12, waist: 12, seat: 13, thight: 12, knee: 54, pantSlipper: 45, hip: 12, phone: "09174163042" },
      { id: 7, name: "Mohammad nowresideh", height: 12, waist: 12, seat: 13, thight: 12, knee: 54, pantSlipper: 45, hip: 12, phone: "09174163042" },
      { id: 8, name: "Mohammad nowresideh", height: 12, waist: 12, seat: 13, thight: 12, knee: 54, pantSlipper: 45, hip: 12, phone: "09174163042" },
      { id: 9, name: "Mohammad nowresideh", height: 12, waist: 12, seat: 13, thight: 12, knee: 54, pantSlipper: 45, hip: 12, phone: "09174163042" },
      { id: 10, name: "Mohammad nowresideh", height: 12, waist: 12, seat: 13, thight: 12, knee: 54, pantSlipper: 45, hip: 12, phone: "09174163042" }
    ];

    const id = +context.query.id! as number;

    const shirt = list.find(item => item.id === id)!;

    for (const key in shirt) {
      // @ts-ignore

      editPants.EDIT_PANTS[key].value = shirt[key].toString();
    }

    store.dispatch(setForms([editPants]));
  }

  async editShirt({ store, context }: T) {
    const list = [
      { id: 1, name: "Mohammad nowresideh", height: 12, shoulder: 12, sleeve: 13, sleeveRing: 12, armpit: 54, chest: 45, collar: 12, phone: "09174163042" },
      { id: 2, name: "Mohammad nowresideh", height: 12, shoulder: 12, sleeve: 13, sleeveRing: 12, armpit: 54, chest: 45, collar: 12, phone: "09174163042" },
      { id: 3, name: "Mohammad nowresideh", height: 12, shoulder: 12, sleeve: 13, sleeveRing: 12, armpit: 54, chest: 45, collar: 12, phone: "09174163042" },
      { id: 4, name: "Mohammad nowresideh", height: 12, shoulder: 12, sleeve: 13, sleeveRing: 12, armpit: 54, chest: 45, collar: 12, phone: "09174163042" },
      { id: 5, name: "Mohammad nowresideh", height: 12, shoulder: 12, sleeve: 13, sleeveRing: 12, armpit: 54, chest: 45, collar: 12, phone: "09174163042" },
      { id: 6, name: "Mohammad nowresideh", height: 12, shoulder: 12, sleeve: 13, sleeveRing: 12, armpit: 54, chest: 45, collar: 12, phone: "09174163042" },
      { id: 7, name: "Mohammad nowresideh", height: 12, shoulder: 12, sleeve: 13, sleeveRing: 12, armpit: 54, chest: 45, collar: 12, phone: "09174163042" },
      { id: 8, name: "Mohammad nowresideh", height: 12, shoulder: 12, sleeve: 13, sleeveRing: 12, armpit: 54, chest: 45, collar: 12, phone: "09174163042" },
      { id: 9, name: "Mohammad nowresideh", height: 12, shoulder: 12, sleeve: 13, sleeveRing: 12, armpit: 54, chest: 45, collar: 12, phone: "09174163042" },
      { id: 10, name: "Mohammad nowresideh", height: 12, shoulder: 12, sleeve: 13, sleeveRing: 12, armpit: 54, chest: 45, collar: 12, phone: "09174163042" }
    ];

    const id = +context.query.id! as number;

    const shirt = list.find(item => item.id === id)!;

    for (const key in shirt) {
      // @ts-ignore

      editShirt.EDIT_SHIRT[key].value = shirt[key].toString();
    }

    store.dispatch(setForms([editShirt]));
  }
}
