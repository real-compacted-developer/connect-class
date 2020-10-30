import React from "react";
import styled from "styled-components";
import Header from "./CreateSideBar/Header";
import SideItem from "./CreateSideBar/SideItem";

const Wrapper = styled.nav`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

const Body = styled.div`
  width: 311px;
  height: 1350px;
  background-color: #f0f1f4;

  padding-top: 60px;
`;

const CreateSideBar: React.FC = () => {
  return (
    <Wrapper>
      <Header />
      <Body>
        <SideItem icon="https://cdn.zeplin.io/5f2aa3244602602fbd41641d/assets/B89A9604-9B47-4740-A702-A74133D61CFD.svg">
          홈
        </SideItem>
        <SideItem icon="https://cdn.zeplin.io/5f2aa3244602602fbd41641d/assets/8AA86A24-CD3F-4DEB-BB5A-A4FA297A0942.svg">
          스터디 개설하기
        </SideItem>
      </Body>
    </Wrapper>
  );
};

export default CreateSideBar;
