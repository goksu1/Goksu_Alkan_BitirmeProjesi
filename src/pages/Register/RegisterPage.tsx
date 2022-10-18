import React from "react";
import { useNavigate } from "react-router-dom";
import { RegisterForm } from "../../components/forms";
import { RegisterFormProps } from "../../components/forms/RegisterForm/RegisterForm.types";
import { auth } from "../../services/http/endpoints/auth";

const RegisterPage = () => {
  const navigate = useNavigate();
  const handleRegister: RegisterFormProps["onRegister"] = (values) => {
   auth.register(values).then((res)=>{
    navigate("/login")
   })
  };
  return (
    <div style={{ marginTop: "10vh" }}>
      <RegisterForm onRegister={handleRegister} />
    </div>
  );
};

export default RegisterPage;
