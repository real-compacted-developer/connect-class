import React from "react";
import styled from "styled-components";

import IconImage from "../../../assets/ic_profile@3x.png";

const Wrapper = styled.div`
  position: absolute;
  right: 52px;
  top: 14px;

  height: 30px;

  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Icon = styled.div`
  width: 30px;
  height: 30px;

  background-image: url(${IconImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
`;

const Button = styled.button`
  margin-left: 20px;
  border: none;
  background-color: transparent;
  outline: none;

  height: 18px;
  font-family: GmarketSans;
  font-size: 18px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.22;
  letter-spacing: normal;
  text-align: left;
  color: #d0d4de;
`;

const SignButton: React.FC = () => {
  return (
    <Wrapper>
      <Icon />
      <Button>로그인 및 회원가입</Button>
    </Wrapper>
  );
};

export default SignButton;
