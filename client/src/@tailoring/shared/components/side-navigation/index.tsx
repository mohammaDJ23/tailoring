import React, { FC } from "react";
import { paths } from "../../../utility";
import { reactPortal } from "../../../utility";
import { Collapse, List, ListItem } from "@material-ui/core";
import { KeyboardArrowRight } from "@material-ui/icons";
import * as C from "./styles";
import { useRedirect, useSideNavigation, useState } from "../../hooks";
import { Element } from "../../../types";
import Backdrop from "../backdrop";

const SideNavigation: FC = () => {
  const { redirect } = useRedirect();
  const { path, collapsIndex, udpateCollapsIndex } = useSideNavigation();
  const { enablingElementReducer } = useState();

  return reactPortal.create(
    <>
      <C.content
        className={`side-navigation position-fixed h-100 bg-blue box-shadow ${
          enablingElementReducer.elementName === Element.NAVIGATION ? "enable-navigation" : "disable-navigation"
        }`}
      >
        <C.content className="wh-100">
          <C.content className="wh-100 overflow-auto">
            <C.content className="w-100 mb-4 p-3">
              <C.content className="d-flex align-items-center justify-content-start">
                <C.content className="mr-14">
                  <C.img src="/svgs/tailor.svg" />
                </C.content>

                <C.content>
                  <C.text className="c-white fs-20">Trailoring</C.text>
                </C.content>
              </C.content>
            </C.content>

            <List disablePadding>
              {paths.map((item, index) => (
                <React.Fragment key={index}>
                  <ListItem
                    onClick={
                      () =>
                        item.paths &&
                        udpateCollapsIndex(collapsIndex === -1 ? index : index === collapsIndex ? -1 : index) /* : redirect("push", item.path) */
                    }
                    button
                    className="w-100 d-flex align-items-center justify-content-between"
                  >
                    <C.content className="hover">
                      <C.text className={`${collapsIndex === index /* item.path === path */ ? "c-white" : "c-deactive"}`}>{item.title}</C.text>
                    </C.content>

                    {item.paths && (
                      <C.content>
                        <KeyboardArrowRight className={`arrow ${collapsIndex === index ? "c-white rotate-90" : "c-deactive"}`} />
                      </C.content>
                    )}
                  </ListItem>

                  {item.paths && (
                    <Collapse in={collapsIndex === index}>
                      <List disablePadding className="wh-100">
                        {item.paths.map((item, index) => (
                          <ListItem onClick={() => redirect("push", item.path)} button key={index} className="hover level-one">
                            <C.text className={`${path === item.path ? "c-white" : "c-deactive"}`}>{item.title}</C.text>
                          </ListItem>
                        ))}
                      </List>
                    </Collapse>
                  )}
                </React.Fragment>
              ))}
            </List>
          </C.content>
        </C.content>
      </C.content>

      <Backdrop />
    </>,

    document.querySelector("#side-navigation")!
  );
};

export default SideNavigation;
