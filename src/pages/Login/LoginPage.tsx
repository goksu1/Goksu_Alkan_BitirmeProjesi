import React, { FC } from "react";
import { LoginForm } from "../../components/forms";
import { LoginFormProps } from "../../components/forms/LoginForm/LoginForm.types";
import { useNavigate } from "react-router-dom";
import { useLoginContext } from "../../contexts/LoginContext/LoginContext";
import { auth } from "../../services/http/endpoints/auth";
import { LoginPageProps } from "./LoginPage.types";

const LoginPage: FC<LoginPageProps> = (props) => {
  const navigate = useNavigate();
  const { login } = useLoginContext();

  const handleLogin: LoginFormProps["onLogin"] = (values) => {
    auth.login(values).then((res) => {
      if (res.status === 200) {
        login(res.data.token, res.data.username);
        // props.onSuccess?.(res.data.token);
        navigate("/");
      }
    });
  };
  return (
    <div style={{ marginTop: "10vh" }}>
      <LoginForm onLogin={handleLogin} />
    </div>
  );
};

export default LoginPage;
