import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100vw;
  height: 60px;

  box-shadow: 0 3px 15px 0 rgba(0, 0, 0, 0.06);
  background-color: #ffffff;

  position: fixed;
  top: 0;

  background-color: red;
`;

const Header: React.FC = () => {
  return <Wrapper></Wrapper>;
};

export default Header;
