import React from "react";
import styled from "styled-components";

import SideBar from "../SideBar";
import Content from "./Content";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
`;

const ContentWrapper = styled.div`
  margin-top: 92px;

  width: calc(100% - 311px);
  height: 100%;

  display: flex;
  flex-direction: column;
`;

const Body: React.FC = () => {
  return (
    <Wrapper>
      <SideBar />
      <ContentWrapper>
        <Content />
      </ContentWrapper>
    </Wrapper>
  );
};

export default Body;
