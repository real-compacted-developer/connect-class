import React from "react";
import styled from "styled-components";

import SIgnButton from "./SignButton";

const Wrapper = styled.div`
  width: 100vw;
  height: 60px;

  box-shadow: 0 3px 15px 0 rgba(0, 0, 0, 0.06);
  background-color: #ffffff;

  position: fixed;
  top: 0;
`;

const LogoImage = styled.div`
  width: 37px;
  height: 31px;

  position: absolute;
  left: 52px;
  top: 14px;

  background-image: url("https://cdn.zeplin.io/5f2aa3244602602fbd41641d/assets/1DA9269A-D6AB-46E5-AD31-5B7215FD407D.svg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
`;

const Header: React.FC = () => {
  return (
    <Wrapper>
      <LogoImage />
      <SIgnButton />
    </Wrapper>
  );
};

export default Header;
