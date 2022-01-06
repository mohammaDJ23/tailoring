import { Page } from "../../types";

export const paths = [
  {
    title: "List",
    path: Page.USERS_LIST
  },

  {
    title: "Creation",
    paths: [
      {
        title: "Pants",
        path: Page.PANTS_CREATION
      },

      {
        title: "Shirt",
        path: Page.SHIRT_CREATION
      }
    ]
  }
];
