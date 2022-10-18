import React, { FC, useState } from "react";
import { Link } from "react-router-dom";
import { Card, Input, Button, Checkbox } from "../../elements";
import { InputProps } from "../../elements/Input/Input.types";
import { FormStyled } from "../Form.styled";
import { LoginFormProps, LoginFormValuesProps } from "./LoginForm.types";

const LoginForm: FC<LoginFormProps> = (props) => {
  const [formValues, setFormValues] = useState<LoginFormValuesProps>({
    username: "",
    password: "",
  });

  const handleChange: InputProps["onChange"] = (e, val) => {
    const name = e.target.name;
    setFormValues((prev) => ({ ...prev, [name]: val }));
  };

  const handleSubmit = () => {
    props.onLogin?.(formValues);
  };

  return (
    <FormStyled>
      <Card title="Login">
        <Input
          type="text"
          name="username"
          placeholder="Enter your username"
          icon="person"
          value={formValues.username}
          onChange={handleChange}
        />
        <Input
          type="password"
          name="password"
          placeholder="Enter your password"
          icon="key"
          value={formValues.password}
          onChange={handleChange}
        />
        <div className="forgot-password">
          <Checkbox label="Remember me" />
          <span className="link">Forgot password?</span>
        </div>
        <Button onClick={handleSubmit}>Login Now</Button>
        <span className="register-link">
          Don't have an account
          <Link to="/register" className="link">
            Sign up!
          </Link>
        </span>
      </Card>
    </FormStyled>
  );
};

export default LoginForm;
