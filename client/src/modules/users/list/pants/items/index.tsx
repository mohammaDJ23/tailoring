import { FC, useState } from "react";
import { IconButton, Menu, MenuItem, ListItem } from "@material-ui/core";
import { MoreVert } from "@material-ui/icons";
import { Page, PantsListObj } from "../../../../../@tailoring/types";
import * as C from "./styles";
import { useRedirect } from "../../../../../@tailoring/shared/hooks";
import moment from "moment";

const Items: FC<PantsListObj> = ({ id, name, createdAt }) => {
  const [element, setElement] = useState<Element | null>(null);
  const { redirect } = useRedirect();

  return (
    <C.content>
      <ListItem>
        <C.content className="w-100 d-flex align-items-center justify-content-between">
          <C.content className="text-overflow-hidden">
            <C.content className="d-flex justify-content-center flex-column">
              <C.content>
                <C.text className="f-bold">{name}</C.text>
              </C.content>

              <C.content>
                <C.text className="fs-12">{moment(createdAt).fromNow()}</C.text>
              </C.content>
            </C.content>
          </C.content>

          <C.content>
            <C.content>
              <IconButton aria-controls="fade-menu" aria-haspopup="true" onClick={event => setElement(event.currentTarget)}>
                <MoreVert />
              </IconButton>

              <Menu id="fade-menu" keepMounted anchorEl={element} open={!!element} onClick={() => setElement(null)} onClose={() => setElement(null)}>
                <MenuItem
                  onClick={() => {
                    setElement(null);
                    redirect("push", `${Page.USER_PANTS_DETAILS}/${id}`);
                  }}
                >
                  Details
                </MenuItem>

                <MenuItem
                  onClick={() => {
                    setElement(null);
                    redirect("push", `${Page.EDIT_PANTS}/${id}`);
                  }}
                >
                  Edit
                </MenuItem>
              </Menu>
            </C.content>
          </C.content>
        </C.content>
      </ListItem>
    </C.content>
  );
};

export default Items;
