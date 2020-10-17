import React from "react";
import styled from "styled-components";

import StudyCard from "./StudyCard";

import dummy from "../../../dummyDatas/StudyCardDummy";

const Wrapper = styled.div`
  width: 100%;
  padding: 30px 110px;

  display: flex;
  flex-direction: column;
`;

const Title = styled.span`
  height: 20px;
  font-family: GmarketSans;
  font-size: 20px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: left;
  color: #34363b;
`;

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;

  list-style: none;
  padding: 0;
`;

const StudyList: React.FC = () => {
  return (
    <Wrapper>
      <Title>스터디 목록</Title>

      <List>
        {dummy.map((cur, index) => (
          <StudyCard
            title={cur.title}
            imageURL={cur.imageURL}
            currentPeople={cur.currentPeople}
            totalPeople={cur.totalPeople}
            key={`StudyCard:${index}`}
          />
        ))}
      </List>
    </Wrapper>
  );
};

export default StudyList;
