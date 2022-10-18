import React, { FC, useState } from "react";
import { Button, Card, Input } from "../../elements";
import { InputProps } from "../../elements/Input/Input.types";
import { FormStyled } from "../Form.styled";
import {
  ChangePasswordFormProps,
  ChangePasswordFormValuesProps,
} from "./ChangePassword.types";

const ChangePasswordForm: FC<ChangePasswordFormProps> = (props) => {
  const [formValues, setFormValues] = useState<ChangePasswordFormValuesProps>({
    username: "",
    oldPassword: "",
    newPassword: "",
    newPasswordConfirm: "",
  });

  const handleChange: InputProps["onChange"] = (e, val) => {
    const name = e.target.name;
    setFormValues((prev) => ({ ...prev, [name]: e.target.value }));
  };

  const handleSubmit = () => {
    props.onChangePassword?.(formValues);
  };

  return (
    <FormStyled>
      <Card title="Change Password">
        <Input
          name="username"
          type="text"
          placeholder="Enter your username"
          icon="person"
          value={formValues.username}
          onChange={handleChange}
        />
        <Input
          name="oldPassword"
          type="password"
          placeholder="Enter your old password"
          icon="key"
          value={formValues.oldPassword}
          onChange={handleChange}
        />
        <Input
          name="newPassword"
          type="password"
          placeholder="Enter your new password"
          icon="key"
          value={formValues.newPassword}
          onChange={handleChange}
        />
        <Input
          name="newPasswordConfirm"
          type="password"
          placeholder="Confirm your new password"
          icon="key"
          value={formValues.newPasswordConfirm}
          onChange={handleChange}
        />
        <Button onClick={handleSubmit}> Change Password</Button>
      </Card>
    </FormStyled>
  );
};

export default ChangePasswordForm;
