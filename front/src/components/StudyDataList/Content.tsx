import Axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory, useRouteMatch } from "react-router";
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

interface CardListState {
  readonly id: string;
  readonly week: string;
}

const Content: React.FC = () => {
  const history = useHistory();
  const match = useRouteMatch<{ groupId: string }>();
  const [cardList, setCardList] = useState<CardListState[]>([]);

  useEffect(() => {
    Axios.get(
      `${process.env.REACT_APP_DB_LAYER}/studydata/bystudy/${match.params.groupId}`
    ).then((res) => {
      setCardList(res.data.data);
    });
  }, [match]);

  const onCardClick = (dataId: string) => () => {
    history.push(`/study/${dataId}`);
  };

  return (
    <Wrapper>
      <Title>스터디 주차를 선택해주세요.</Title>

      <List>
        {cardList.map((cur, index) => (
          <StudyCard
            title={`${cur.week}주차`}
            currentPeople={0}
            totalPeople={6}
            onClick={onCardClick(cur.id)}
            key={`StudyDataCard:${index}`}
            isStudyData
          />
        ))}
      </List>
    </Wrapper>
  );
};

export default Content;
