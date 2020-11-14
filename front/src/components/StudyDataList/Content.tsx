import React from "react";
import styled from "styled-components";
import StudyCard from "../MainPage/Content/StudyCard";

const Wrapper = styled.div`
  width: 100%;
  padding: 30px 110px;

  display: flex;
  flex-direction: column;
`;

const Title = styled.span`
  height: 20px;
  font-family: "Gmarket Sans", sans-serif;
  font-size: 20px;
  font-weight: bold;
  color: #34363b;
`;

const List = styled.ul`
  margin-top: 65px;

  display: flex;
  flex-wrap: wrap;

  list-style: none;
  padding: 0;
`;

const Content: React.FC = () => {
  return (
    <Wrapper>
      <Title>스터디 주차를 선택해주세요.</Title>

      <List>
        <StudyCard
          title="1주차"
          currentPeople={0}
          totalPeople={6}
          isStudyData
        />
      </List>
    </Wrapper>
  );
};

export default Content;
