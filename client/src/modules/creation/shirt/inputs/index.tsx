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
  const shirtForm = formsReducer.forms[Form.CREATE_NEW_SHIRT];

  return (
    <C.form
      className="wh-100"
      onSubmit={event => {
        event.preventDefault();

        formSubmit(Form.CREATE_NEW_SHIRT);
      }}
    >
      <Row className="gy-4" xs={1}>
        <Col>
          <C.content className="text-center mb-2">
            <C.text className="f-bold fs-22">Create new shirt</C.text>
          </C.content>
        </Col>

        <Col>
          <FormControl fullWidth>
            <InputLabel htmlFor="name">Name</InputLabel>

            <Inpt
              value={shirtForm[Input.NAME].value}
              type="text"
              onChange={event => changeInput({ form: Form.CREATE_NEW_SHIRT, input: Input.NAME, value: event.target.value })}
              fullWidth
            />

            <FormHelperText></FormHelperText>
          </FormControl>
        </Col>

        <Col>
          <FormControl fullWidth>
            <InputLabel htmlFor="height">Height</InputLabel>

            <Inpt
              value={shirtForm[Input.HEIGHT].value}
              type="number"
              onChange={event => changeInput({ form: Form.CREATE_NEW_SHIRT, input: Input.HEIGHT, value: parseInt(event.target.value) })}
              fullWidth
            />

            <FormHelperText></FormHelperText>
          </FormControl>
        </Col>

        <Col>
          <FormControl fullWidth>
            <InputLabel htmlFor="shoulder">Shoulder</InputLabel>

            <Inpt
              value={shirtForm[Input.SHOULDER].value}
              type="number"
              onChange={event => changeInput({ form: Form.CREATE_NEW_SHIRT, input: Input.SHOULDER, value: parseInt(event.target.value) })}
              fullWidth
            />

            <FormHelperText></FormHelperText>
          </FormControl>
        </Col>

        <Col>
          <FormControl fullWidth>
            <InputLabel htmlFor="sleeve">Sleeve</InputLabel>

            <Inpt
              value={shirtForm[Input.SLEEVE].value}
              type="number"
              onChange={event => changeInput({ form: Form.CREATE_NEW_SHIRT, input: Input.SLEEVE, value: parseInt(event.target.value) })}
              fullWidth
            />

            <FormHelperText></FormHelperText>
          </FormControl>
        </Col>

        <Col>
          <FormControl fullWidth>
            <InputLabel htmlFor="sleeve-ring">Sleeve Ring</InputLabel>

            <Inpt
              value={shirtForm[Input.SLEEVE_RING].value}
              type="number"
              onChange={event => changeInput({ form: Form.CREATE_NEW_SHIRT, input: Input.SLEEVE_RING, value: parseInt(event.target.value) })}
              fullWidth
            />

            <FormHelperText></FormHelperText>
          </FormControl>
        </Col>

        <Col>
          <FormControl fullWidth>
            <InputLabel htmlFor="armpit">Armpit</InputLabel>

            <Inpt
              value={shirtForm[Input.ARMPIT].value}
              type="number"
              onChange={event => changeInput({ form: Form.CREATE_NEW_SHIRT, input: Input.ARMPIT, value: parseInt(event.target.value) })}
              fullWidth
            />

            <FormHelperText></FormHelperText>
          </FormControl>
        </Col>

        <Col>
          <FormControl fullWidth>
            <InputLabel htmlFor="chest">Chest</InputLabel>

            <Inpt
              value={shirtForm[Input.CHEST].value}
              type="number"
              onChange={event => changeInput({ form: Form.CREATE_NEW_SHIRT, input: Input.CHEST, value: parseInt(event.target.value) })}
              fullWidth
            />

            <FormHelperText></FormHelperText>
          </FormControl>
        </Col>

        <Col>
          <FormControl fullWidth>
            <InputLabel htmlFor="collar">Collar</InputLabel>

            <Inpt
              value={shirtForm[Input.COLLAR].value}
              type="number"
              onChange={event => changeInput({ form: Form.CREATE_NEW_SHIRT, input: Input.COLLAR, value: parseInt(event.target.value) })}
              fullWidth
            />

            <FormHelperText></FormHelperText>
          </FormControl>
        </Col>

        <Col>
          <FormControl fullWidth>
            <InputLabel htmlFor="phone">Phone number</InputLabel>

            <Inpt
              value={shirtForm[Input.PHONE].value}
              type="text"
              onChange={event => changeInput({ form: Form.CREATE_NEW_SHIRT, input: Input.PHONE, value: event.target.value })}
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
