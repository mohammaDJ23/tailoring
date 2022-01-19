import { List as Lst, Divider, FormControl, Input, InputLabel, FormHelperText } from "@material-ui/core";
import React, { FC } from "react";
import { useAction, useState } from "../../../../../@tailoring/shared/hooks";
import { ShirtListObj, List as Lists } from "../../../../../@tailoring/types";
import Items from "../items";
import * as C from "./styles";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const List: FC = () => {
  const { listsReducer, searchQueryReducer } = useState();
  const { searchQuery, changePage } = useAction();
  const shirtList = listsReducer.lists[Lists.SHIRT];
  const currentPage = shirtList.current;
  const maxPage = shirtList.max;
  const list: ShirtListObj[] = shirtList.list[currentPage];

  return (
    <C.contnet>
      <C.contnet className="mb-4 mt-2">
        <FormControl fullWidth>
          <InputLabel htmlFor="search">Search</InputLabel>

          <Input value={searchQueryReducer.query} type="text" onChange={event => searchQuery(event.target.value, Lists.SHIRT)} fullWidth />

          <FormHelperText></FormHelperText>
        </FormControl>
      </C.contnet>

      <C.contnet>
        {list.length >= 1 ? (
          <Lst>
            {list.map((pant, index) => (
              <React.Fragment key={index}>
                <Items {...pant} />

                {index !== list.length - 1 && <Divider />}
              </React.Fragment>
            ))}
          </Lst>
        ) : (
          <C.contnet className="text-center">
            <C.text className="fs-12">Empty list</C.text>
          </C.contnet>
        )}
      </C.contnet>

      {list.length >= 1 && (
        <C.contnet className="pb-3">
          <C.contnet className="d-flex align-items-center justify-content-center">
            <Stack spacing={2}>
              <Pagination
                onChange={(_, page) => changePage(page, { type: Lists.SHIRT, query: searchQueryReducer.query })}
                count={maxPage}
                page={currentPage}
                size="small"
                color="primary"
              />
            </Stack>
          </C.contnet>
        </C.contnet>
      )}
    </C.contnet>
  );
};

export default List;
