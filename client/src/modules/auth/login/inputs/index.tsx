import { FormControl, Input as Inpt, InputLabel, FormHelperText } from "@material-ui/core";
import { Button } from "@mui/material";
import { FC } from "react";
import { Col, Row } from "reactstrap";
import { useAction, useFocus, useState } from "../../../../@tailoring/shared/hooks";
import { Form, Input } from "../../../../@tailoring/types";
import * as C from "./styles";

const Inputs: FC = () => {
  const {} = useFocus();
  const { formsReducer } = useState();
  const { changeInput, formSubmit } = useAction();
  const signupForm = formsReducer.forms[Form.LOGIN];

  return (
    <C.form
      className="wh-100"
      onSubmit={event => {
        event.preventDefault();

        formSubmit(Form.LOGIN);
      }}
    >
      <Row className="gy-4" xs={1}>
        <Col>
          <C.content className="text-center mb-2">
            <C.text className="f-bold fs-22">Login</C.text>
          </C.content>
        </Col>

        <Col>
          <FormControl className="w-100">
            <InputLabel htmlFor="email">Email</InputLabel>

            <Inpt
              value={signupForm[Input.EMAIL].value}
              type="email"
              onChange={event => changeInput({ form: Form.LOGIN, input: Input.EMAIL, value: event.target.value })}
              className="w-100"
            />

            <FormHelperText></FormHelperText>
          </FormControl>
        </Col>

        <Col>
          <FormControl className="w-100">
            <InputLabel htmlFor="password">Password</InputLabel>

            <Inpt
              value={signupForm[Input.PASSWORD].value}
              type="password"
              onChange={event => changeInput({ form: Form.LOGIN, input: Input.PASSWORD, value: event.target.value })}
              className="w-100"
            />

            <FormHelperText></FormHelperText>
          </FormControl>
        </Col>

        <Col>
          <Button variant="contained" fullWidth type="submit">
            Send
          </Button>
        </Col>
      </Row>
    </C.form>
  );
};

export default Inputs;
