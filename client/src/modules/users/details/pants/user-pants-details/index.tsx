import { FC } from "react";
import { useState } from "../../../../../@tailoring/shared/hooks";
import * as C from "./styles";
import Card from "../../../../../@tailoring/shared/components/card";
import { Col, Row } from "reactstrap";
import { Button } from "@mui/material";

const UserPantsDetails: FC = () => {
  const { detailsReducer } = useState();
  const pants = detailsReducer.pants!;

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
                    <C.text className="f-bold">{pants.name}</C.text>
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
                    <C.text className="f-bold">{pants.height}</C.text>
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
                    <C.img src="/svgs/waist.svg" />
                  </C.content>
                </C.content>

                <C.content className="d-flex align-items-start flex-column justify-content-start">
                  <C.content>
                    <C.text className="f-bold">Waist</C.text>
                  </C.content>

                  <C.content className="text-overflow-hidden">
                    <C.text className="f-bold">{pants.waist}</C.text>
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
                    <C.img src="/svgs/seat.svg" />
                  </C.content>
                </C.content>

                <C.content className="d-flex align-items-start flex-column justify-content-start">
                  <C.content>
                    <C.text className="f-bold">Seat of trousers</C.text>
                  </C.content>

                  <C.content className="text-overflow-hidden">
                    <C.text className="f-bold">{pants.seat}</C.text>
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
                    <C.img src="/svgs/thight.svg" />
                  </C.content>
                </C.content>

                <C.content className="d-flex align-items-start flex-column justify-content-start">
                  <C.content>
                    <C.text className="f-bold">Thight</C.text>
                  </C.content>

                  <C.content className="text-overflow-hidden">
                    <C.text className="f-bold">{pants.thight}</C.text>
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
                    <C.img src="/svgs/knee.svg" />
                  </C.content>
                </C.content>

                <C.content className="d-flex align-items-start flex-column justify-content-start">
                  <C.content>
                    <C.text className="f-bold">Knee</C.text>
                  </C.content>

                  <C.content className="text-overflow-hidden">
                    <C.text className="f-bold">{pants.knee}</C.text>
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
                    <C.img src="/svgs/pant-slipper.svg" />
                  </C.content>
                </C.content>

                <C.content className="d-flex align-items-start flex-column justify-content-start">
                  <C.content>
                    <C.text className="f-bold">Pant slipper</C.text>
                  </C.content>

                  <C.content className="text-overflow-hidden">
                    <C.text className="f-bold">{pants.pantSlipper}</C.text>
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
                    <C.img src="/svgs/hip.svg" />
                  </C.content>
                </C.content>

                <C.content className="d-flex align-items-start flex-column justify-content-start">
                  <C.content>
                    <C.text className="f-bold">Hip</C.text>
                  </C.content>

                  <C.content className="text-overflow-hidden">
                    <C.text className="f-bold">{pants.hip}</C.text>
                  </C.content>
                </C.content>
              </C.content>
            </Card>
          </Col>

          <Col>
            <C.content>
              <Button fullWidth variant="contained">
                Edit the pants
              </Button>
            </C.content>
          </Col>
        </Row>
      </C.content>
    </C.content>
  );
};

export default UserPantsDetails;
