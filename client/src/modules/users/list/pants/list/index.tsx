import { List as Lst, Divider } from "@material-ui/core";
import React, { FC } from "react";
import { useState } from "../../../../../@tailoring/shared/hooks";
import { PantsListObj } from "../../../../../@tailoring/types";
import Items from "../items";

const List: FC = () => {
  const { listsReducer } = useState();
  const list: PantsListObj[] = listsReducer.lists.pantsList;

  return (
    <Lst>
      {list.map((pant, index) => (
        <React.Fragment key={index}>
          <Items {...pant} />

          {index !== list.length - 1 && <Divider />}
        </React.Fragment>
      ))}
    </Lst>
  );
};

export default List;
