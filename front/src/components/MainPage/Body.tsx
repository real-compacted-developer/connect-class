import React from "react";
import styled from "styled-components";

import SideBar from "../SideBar";
import Content from "./Content";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
`;

const Body: React.FC = () => {
  return (
    <Wrapper>
      <SideBar />
      <Content />
    </Wrapper>
  );
};

export default Body;
