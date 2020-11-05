import React from "react";
import { Redirect } from "react-router-dom";
import Header from "../components/MainPage/Header";
import dotenv from "dotenv";
import { KaKaoSignin } from "../components/Login/KaKaoSignin";
import { GoogleSignin } from "../components/Login/googleSignin";
import { Nav } from "../components/Login/Nav";
import styled from "styled-components";

dotenv.config();
const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
`;
const LoginPage: React.FC = () => {
  // Redirect if logged in
  if (localStorage.getItem("token")) {
    return <Redirect to="/" />;
  }
  return (
    <Wrapper>
      <Header />
      <h1>Login Page</h1>
      <KaKaoSignin />
      <GoogleSignin />
      <Nav />
    </Wrapper>
  );
};

export default LoginPage;
