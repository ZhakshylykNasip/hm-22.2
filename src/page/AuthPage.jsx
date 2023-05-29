import React from "react";
import { useNavigate } from "react-router-dom";
import Authorized from "../components/Authorized";
import { Calculator } from "../components/calculator/Calculator";

const AuthPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <Authorized />
    </>
  );
};

export default AuthPage;
