import React from "react";
import { Redirect } from "react-router-dom";
import { KaKaoSignin } from "../components/Login/KaKaoSignin";
import { GoogleSignin } from "../components/Login/GoogleSignin";
import { Nav } from "../components/Login/Nav";
import styled from "styled-components";

const Icon = styled.div`
  width:71px;
  height:61px;
  margin:auto;

  background-image: url("https://cdn.zeplin.io/5f2aa3244602602fbd41641d/assets/E070E5CB-0C30-48DB-BCC1-5A5E76A1156A.svg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
`

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #000000aa;
`;

const SectionWrapper = styled.section`
  width: 620px;
  margin:0;
  padding:20px;
  border-radius:20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
`

const Header = styled.section`
  width:500px;
  margin:20px;
`;

const Message = styled.p`
  font-family: GmarketSans;
  font-size: 20px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
  text-align: center;
  color: #34363b;
`

const Buttons = styled.div`
  width: 500px;
  height:200px;
  margin:20px;
  display: flex;


  flex-direction: column;
  justify-content: space-between;
  align-items:center;
`;

const LoginPage: React.FC = () => {
  // Redirect if logged in
  if (localStorage.getItem("token")) {
    return <Redirect to="/" />;
  }

  return (
    <Wrapper>
      <SectionWrapper>
        <Header>
          <Icon />
          <Message>로그인 및 회원가입을 통해</Message>
          <Message>더 많은 커넥트클래스의 기능을 이용해보세요.</Message>
        </Header>
        <Buttons>
          <KaKaoSignin />
          <GoogleSignin />
          <Nav />
        </Buttons>
      </SectionWrapper>
    </Wrapper>
  );
};

export default LoginPage;
