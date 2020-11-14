import React from "react";
import styled from "styled-components";
import Header from "../components/MainPage/Header";
import Body from "../components/StudyDataList/Body";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
`;

const StudyDataList: React.FC = () => {
  return (
    <Wrapper>
      <Header />
      <Body />
    </Wrapper>
  );
};

export default StudyDataList;
