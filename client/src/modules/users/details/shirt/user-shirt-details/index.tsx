import { FC } from "react";
import { useRedirect, useState } from "../../../../../@tailoring/shared/hooks";
import * as C from "./styles";
import Card from "../../../../../@tailoring/shared/components/card";
import { Col, Row } from "reactstrap";
import { Button } from "@mui/material";
import { useRouter } from "next/router";
import { Page } from "../../../../../@tailoring/types";
import moment from "moment";

const UserShirtDetails: FC = () => {
  const { detailsReducer } = useState();
  const { query } = useRouter();
  const { redirect } = useRedirect();
  const shirt = detailsReducer.shirt!;

  return (
    <C.content className="wh-100">
      <C.content className="wh-100">
        <Row className="gy-4 pb-4">
          <Col xs={12} md={6}>
            <Card>
              <C.content className="d-flex align-items-center justify-content-start">
                <C.content className="mr-14">
                  <C.content>
                    <C.img src="/svgs/person.svg" />
                  </C.content>
                </C.content>

                <C.content className="d-flex align-items-start flex-column justify-content-start">
                  <C.content>
                    <C.text className="f-bold">Name</C.text>
                  </C.content>

                  <C.content className="text-overflow-hidden">
                    <C.text className="fs-14">{shirt.name}</C.text>
                  </C.content>
                </C.content>
              </C.content>
            </Card>
          </Col>

          <Col xs={12} md={6}>
            <Card>
              <C.content className="d-flex align-items-center justify-content-start">
                <C.content className="mr-14">
                  <C.content>
                    <C.img src="/svgs/phone.svg" />
                  </C.content>
                </C.content>

                <C.content className="d-flex align-items-start flex-column justify-content-start">
                  <C.content>
                    <C.text className="f-bold">Phone</C.text>
                  </C.content>

                  <C.content className="text-overflow-hidden">
                    <C.text className="fs-14">{shirt.phone}</C.text>
                  </C.content>
                </C.content>
              </C.content>
            </Card>
          </Col>

          <Col xs={12} md={6}>
            <Card>
              <C.content className="d-flex align-items-center justify-content-start">
                <C.content className="mr-14">
                  <C.content>
                    <C.img src="/svgs/height.svg" />
                  </C.content>
                </C.content>

                <C.content className="d-flex align-items-start flex-column justify-content-start">
                  <C.content>
                    <C.text className="f-bold">Height</C.text>
                  </C.content>

                  <C.content className="text-overflow-hidden">
                    <C.text className="fs-14">{shirt.height}</C.text>
                  </C.content>
                </C.content>
              </C.content>
            </Card>
          </Col>

          <Col xs={12} md={6}>
            <Card>
              <C.content className="d-flex align-items-center justify-content-start">
                <C.content className="mr-14">
                  <C.content>
                    <C.img src="/svgs/shoulder.svg" />
                  </C.content>
                </C.content>

                <C.content className="d-flex align-items-start flex-column justify-content-start">
                  <C.content>
                    <C.text className="f-bold">Shoulder</C.text>
                  </C.content>

                  <C.content className="text-overflow-hidden">
                    <C.text className="fs-14">{shirt.shoulder}</C.text>
                  </C.content>
                </C.content>
              </C.content>
            </Card>
          </Col>

          <Col xs={12} md={6}>
            <Card>
              <C.content className="d-flex align-items-center justify-content-start">
                <C.content className="mr-14">
                  <C.content>
                    <C.img src="/svgs/sleeve.svg" />
                  </C.content>
                </C.content>

                <C.content className="d-flex align-items-start flex-column justify-content-start">
                  <C.content>
                    <C.text className="f-bold">Sleeve</C.text>
                  </C.content>

                  <C.content className="text-overflow-hidden">
                    <C.text className="fs-14">{shirt.sleeve}</C.text>
                  </C.content>
                </C.content>
              </C.content>
            </Card>
          </Col>

          <Col xs={12} md={6}>
            <Card>
              <C.content className="d-flex align-items-center justify-content-start">
                <C.content className="mr-14">
                  <C.content>
                    <C.img src="/svgs/sleeve-ring.svg" />
                  </C.content>
                </C.content>

                <C.content className="d-flex align-items-start flex-column justify-content-start">
                  <C.content>
                    <C.text className="f-bold">Sleeve ring</C.text>
                  </C.content>

                  <C.content className="text-overflow-hidden">
                    <C.text className="fs-14">{shirt.sleeveRing}</C.text>
                  </C.content>
                </C.content>
              </C.content>
            </Card>
          </Col>

          <Col xs={12} md={6}>
            <Card>
              <C.content className="d-flex align-items-center justify-content-start">
                <C.content className="mr-14">
                  <C.content>
                    <C.img src="/svgs/armpit.svg" />
                  </C.content>
                </C.content>

                <C.content className="d-flex align-items-start flex-column justify-content-start">
                  <C.content>
                    <C.text className="f-bold">Armpit</C.text>
                  </C.content>

                  <C.content className="text-overflow-hidden">
                    <C.text className="fs-14">{shirt.armpit}</C.text>
                  </C.content>
                </C.content>
              </C.content>
            </Card>
          </Col>

          <Col xs={12} md={6}>
            <Card>
              <C.content className="d-flex align-items-center justify-content-start">
                <C.content className="mr-14">
                  <C.content>
                    <C.img src="/svgs/chest.svg" />
                  </C.content>
                </C.content>

                <C.content className="d-flex align-items-start flex-column justify-content-start">
                  <C.content>
                    <C.text className="f-bold">Chest</C.text>
                  </C.content>

                  <C.content className="text-overflow-hidden">
                    <C.text className="fs-14">{shirt.chest}</C.text>
                  </C.content>
                </C.content>
              </C.content>
            </Card>
          </Col>

          <Col xs={12} md={6}>
            <Card>
              <C.content className="d-flex align-items-center justify-content-start">
                <C.content className="mr-14">
                  <C.content>
                    <C.img src="/svgs/collar.svg" />
                  </C.content>
                </C.content>

                <C.content className="d-flex align-items-start flex-column justify-content-start">
                  <C.content>
                    <C.text className="f-bold">Collar</C.text>
                  </C.content>

                  <C.content className="text-overflow-hidden">
                    <C.text className="fs-14">{shirt.collar}</C.text>
                  </C.content>
                </C.content>
              </C.content>
            </Card>
          </Col>

          <Col xs={12} md={6}>
            <Card>
              <C.content className="d-flex align-items-center justify-content-start">
                <C.content className="mr-14">
                  <C.content>
                    <C.img src="/svgs/date.svg" />
                  </C.content>
                </C.content>

                <C.content className="d-flex align-items-start flex-column justify-content-start">
                  <C.content>
                    <C.text className="f-bold">Date</C.text>
                  </C.content>

                  <C.content className="text-overflow-hidden">
                    <C.text className="fs-14">{moment(shirt.createdAt).format("lll")}</C.text>
                  </C.content>
                </C.content>
              </C.content>
            </Card>
          </Col>

          <Col xs={12}>
            <C.content>
              <Button onClick={() => redirect("push", `${Page.EDIT_SHIRT}/${query.id as string}`)} type="button" fullWidth variant="contained">
                Edit the shirt
              </Button>
            </C.content>
          </Col>
        </Row>
      </C.content>
    </C.content>
  );
};

export default UserShirtDetails;
