import React, { useEffect, useState } from "react";
import styled from "styled-components";
import StudyCard from "./StudyCard";
import Axios from "axios";

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

interface StudyGroupType {
  readonly id: string;
  readonly title: string;
  readonly category: string;
  readonly password: string;
  readonly salt: string;
  readonly people: string[];
  readonly maxPeople: number;
  readonly owner: string;
  readonly isPremium: boolean;
  readonly createdAt: Date;
  readonly updatedAt: Date;
}

const IT_IMAGE =
  "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80";

const DEFAULT_IMAGE =
  "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80";

const StudyList: React.FC = () => {
  const [studyList, setStudyList] = useState<StudyGroupType[]>([]);

  useEffect(() => {
    Axios.get(`${process.env.REACT_APP_STUDY_LAYER}/group`).then((res) =>
      setStudyList(res.data.data)
    );
  }, []);

  return (
    <Wrapper>
      <Title>스터디 목록</Title>

      <List>
        {studyList.map((cur, index) => (
          <StudyCard
            title={cur.title}
            imageURL={cur.category === "IT분야" ? IT_IMAGE : DEFAULT_IMAGE}
            currentPeople={0}
            totalPeople={cur.maxPeople}
            key={`StudyCard:${index}`}
          />
        ))}
      </List>
    </Wrapper>
  );
};

export default StudyList;
