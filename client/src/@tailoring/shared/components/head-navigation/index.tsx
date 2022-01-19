import { FC } from "react";
import * as C from "./styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useAction } from "../../hooks";
import { Element } from "../../../types";
import { useResize } from "../../hooks/use-resize";
import { useDebounce } from "../../hooks/use-debounce";

const HeadNavigation: FC = () => {
  const { enablingElement } = useAction();
  const { debounce } = useDebounce();

  const {} = useResize(async function (window) {
    if (window.innerWidth >= 1200) {
      await debounce(500);

      enablingElement("");
    }
  });

  return (
    <C.content className="w-100 head-container position-fixed">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton onClick={() => enablingElement(Element.NAVIGATION)} size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
              <MenuIcon />
            </IconButton>

            <Button color="inherit"></Button>
          </Toolbar>
        </AppBar>
      </Box>
    </C.content>
  );
};

export default HeadNavigation;
