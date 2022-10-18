import React, { FC, useState } from "react";
import { Button, Card, Checkbox, Input } from "../../elements";
import { Link } from "react-router-dom";
import {
  RegisterFormProps,
  RegisterFormValuesProps,
} from "./RegisterForm.types";
import { InputProps } from "../../elements/Input/Input.types";
import { FormStyled } from "../Form.styled";

const RegisterForm: FC<RegisterFormProps> = (props) => {
  const [formValues, setFormValues] = useState<RegisterFormValuesProps>({
    username: "",
    password: "",
    passwordConfirm: "",
  });

  const handleChange: InputProps["onChange"] = (e, val) => {
    const name = e.target.name;
    setFormValues((prev) => ({ ...prev, [name]: val }));
  };

  const handleSubmit = () => {
    props.onRegister?.(formValues);
  };

  return (
    <FormStyled>
      <Card title="Register">
        <Input
          type="text"
          value={formValues.username}
          placeholder="Enter your username"
          icon="person_add"
          name="username"
          onChange={handleChange}
        />
        <Input
          type="password"
          value={formValues.password}
          placeholder="Enter your password"
          icon="key"
          name="password"
          onChange={handleChange}
        />
        <Input
          type="password"
          value={formValues.passwordConfirm}
          placeholder="Confirm your password"
          icon="key"
          name="passwordConfirm"
          onChange={handleChange}
        />
        <div className="conditions">
          <Checkbox label="I accept all terms & conditions" />
        </div>
        <Button onClick={handleSubmit}>Register Now</Button>
        <span className="signin-link">
          Already have an account?
          <Link to="/login" className="link">
            Sign in!
          </Link>
        </span>
      </Card>
    </FormStyled>
  );
};

export default RegisterForm;
