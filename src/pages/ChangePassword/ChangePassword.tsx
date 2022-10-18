import React, { FC, useState } from "react";
import { ChangePasswordForm } from "../../components/forms";
import { ChangePasswordFormProps } from "../../components/forms/ChangePasswordForm/ChangePassword.types";
import { ChangePasswordPageProps } from "./ChangePassword.types";
import { Styled } from "./ChangePassword.styled";
import { auth } from "../../services/http/endpoints/auth";

const ChangePassword: FC<ChangePasswordPageProps> = (props) => {
  const [isChanged, setIsChanged] = useState<boolean>(false);
  const [showMessage, setShowMessage] = useState<boolean>(false);

  const handleChangePassword: ChangePasswordFormProps["onChangePassword"] = (
    values
  ) => {
    auth
      .passwordChange(values)
      .then((res) => {
        setShowMessage(true);
        if (res.status === 200) {
          setIsChanged(true);
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <Styled>
      <ChangePasswordForm onChangePassword={handleChangePassword} />
      {showMessage ? (
        <p>
          <span className={`message ${!isChanged ? "fail" : ""}`}>
            {!isChanged
              ? "Something went wrong"
              : "Password Successfully Changed!"}
          </span>
        </p>
      ) : null}
    </Styled>
  );
};

export default ChangePassword;
