import { FC } from "react";
import * as C from "./styles";
import { Input, Form } from "../../../../@tailoring/types";
import { useAction, useFocus, useState } from "../../../../@tailoring/shared/hooks";
import { Row, Col } from "reactstrap";
import { FormControl, InputLabel, Input as Inpt, FormHelperText } from "@material-ui/core";
import { Button } from "@mui/material";

const Inputs: FC = () => {
  const {} = useFocus();
  const { formsReducer } = useState();
  const { changeInput, formSubmit } = useAction();
  const pantsForm = formsReducer.forms[Form.EDIT_PANTS];

  return (
    <C.form
      className="wh-100"
      onSubmit={event => {
        event.preventDefault();

        formSubmit(Form.EDIT_PANTS);
      }}
    >
      <Row className="gy-4" xs={1}>
        <Col>
          <C.content className="text-center mb-2">
            <C.text className="f-bold fs-22">Edit pants</C.text>
          </C.content>
        </Col>

        <Col>
          <FormControl fullWidth>
            <InputLabel htmlFor="name">Name</InputLabel>

            <Inpt
              value={pantsForm[Input.NAME].value}
              type="text"
              onChange={event => changeInput({ form: Form.EDIT_PANTS, input: Input.NAME, value: event.target.value })}
              fullWidth
            />

            <FormHelperText></FormHelperText>
          </FormControl>
        </Col>

        <Col>
          <FormControl fullWidth>
            <InputLabel htmlFor="height">Height</InputLabel>

            <Inpt
              value={pantsForm[Input.HEIGHT].value}
              type="number"
              onChange={event => changeInput({ form: Form.EDIT_PANTS, input: Input.HEIGHT, value: event.target.value })}
              fullWidth
            />

            <FormHelperText></FormHelperText>
          </FormControl>
        </Col>

        <Col>
          <FormControl fullWidth>
            <InputLabel htmlFor="waist">Waist</InputLabel>

            <Inpt
              value={pantsForm[Input.WAIST].value}
              type="number"
              onChange={event => changeInput({ form: Form.EDIT_PANTS, input: Input.WAIST, value: event.target.value })}
              fullWidth
            />

            <FormHelperText></FormHelperText>
          </FormControl>
        </Col>

        <Col>
          <FormControl fullWidth>
            <InputLabel htmlFor="seat">Seat</InputLabel>

            <Inpt
              value={pantsForm[Input.SEAT].value}
              type="number"
              onChange={event => changeInput({ form: Form.EDIT_PANTS, input: Input.SEAT, value: event.target.value })}
              fullWidth
            />

            <FormHelperText></FormHelperText>
          </FormControl>
        </Col>

        <Col>
          <FormControl fullWidth>
            <InputLabel htmlFor="thight">Thight</InputLabel>

            <Inpt
              value={pantsForm[Input.THIGHT].value}
              type="number"
              onChange={event => changeInput({ form: Form.EDIT_PANTS, input: Input.THIGHT, value: event.target.value })}
              fullWidth
            />

            <FormHelperText></FormHelperText>
          </FormControl>
        </Col>

        <Col>
          <FormControl fullWidth>
            <InputLabel htmlFor="knee">Knee</InputLabel>

            <Inpt
              value={pantsForm[Input.KNEE].value}
              type="number"
              onChange={event => changeInput({ form: Form.EDIT_PANTS, input: Input.KNEE, value: event.target.value })}
              fullWidth
            />

            <FormHelperText></FormHelperText>
          </FormControl>
        </Col>

        <Col>
          <FormControl fullWidth>
            <InputLabel htmlFor="pant-slipper">Pant slipper</InputLabel>

            <Inpt
              value={pantsForm[Input.PANT_SLIPPER].value}
              type="number"
              onChange={event => changeInput({ form: Form.EDIT_PANTS, input: Input.PANT_SLIPPER, value: event.target.value })}
              fullWidth
            />

            <FormHelperText></FormHelperText>
          </FormControl>
        </Col>

        <Col>
          <FormControl fullWidth>
            <InputLabel htmlFor="hip">Hip</InputLabel>

            <Inpt
              value={pantsForm[Input.HIP].value}
              type="number"
              onChange={event => changeInput({ form: Form.EDIT_PANTS, input: Input.HIP, value: event.target.value })}
              fullWidth
            />

            <FormHelperText></FormHelperText>
          </FormControl>
        </Col>

        <Col>
          <FormControl fullWidth>
            <InputLabel htmlFor="phone">Phone number</InputLabel>

            <Inpt
              value={pantsForm[Input.PHONE].value}
              type="text"
              onChange={event => changeInput({ form: Form.CREATE_NEW_PANTS, input: Input.PHONE, value: event.target.value })}
              fullWidth
            />

            <FormHelperText></FormHelperText>
          </FormControl>
        </Col>

        <Col className="mb-4">
          <Button variant="contained" fullWidth type="submit">
            Send
          </Button>
        </Col>
      </Row>
    </C.form>
  );
};

export default Inputs;
