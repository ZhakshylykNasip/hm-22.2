import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../store/auth/authSlice";
import styled from "styled-components";

const Authorized = () => {
  const dispatch = useDispatch();

  const { isAuthorized } = useSelector((state) => state.auth);

  console.log(isAuthorized);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = () => {
    if (email.includes("@") && password.length > 4) {
      dispatch(login({ email: email, password: password }));
      navigate("/todos");
    }
  };

  return (
    <Container>
      <form onSubmit={onLogin}>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password</label>

        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button>login</button>
      </form>
    </Container>
  );
};

const Container = styled.div`
  width: 200px;
  height: 150px;
  border: 1px solid black;
margin-top: 150px;

`
export default Authorized;

