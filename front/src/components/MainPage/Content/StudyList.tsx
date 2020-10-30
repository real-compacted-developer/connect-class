import React, { useEffect, useState } from "react";
import styled from "styled-components";
import StudyCard from "./StudyCard";
import Axios from "axios";
import { useHistory } from "react-router";

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

const EMPLOY_IMAGE =
  "https://images.unsplash.com/photo-1506784926709-22f1ec395907?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1948&q=80";

const OFFICIAL_IMAGE =
  "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1952&q=80";

const BOOK_IMAGE =
  "https://images.unsplash.com/photo-1557244252-04610dfe5790?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80";

const DEFAULT_IMAGE =
  "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80";

interface StudyListProps {
  readonly categoryState: [
    string,
    React.Dispatch<React.SetStateAction<string>>
  ];
}

const StudyList: React.FC<StudyListProps> = ({ categoryState }) => {
  const history = useHistory();
  const [originStudyList, setOriginStudyList] = useState<StudyGroupType[]>([]);
  const [showStudyList, setShowStudyList] = useState<StudyGroupType[]>([]);
  const [category] = categoryState;

  useEffect(() => {
    Axios.get(`${process.env.REACT_APP_STUDY_LAYER}/group`).then((res) => {
      setOriginStudyList(res.data.data);
      setShowStudyList(res.data.data);
    });
  }, []);

  useEffect(() => {
    if (category.trim() === "") {
      setShowStudyList(originStudyList);
      return;
    }

    const search = originStudyList.filter(
      (study) => study.category === category
    );
    setShowStudyList(search);
  }, [originStudyList, category]);

  const onStudyCardClick = (studyGroupId: string) => () => {
    Axios.get(
      `${process.env.REACT_APP_STUDY_LAYER}/group/data/${studyGroupId}`
    ).then((res) => {
      if (!res.data.data) return;
      history.push(`/study/${res.data.data.id}`);
    });
  };

  const renderCoverImage = (category: string) => {
    if (category === "IT") return IT_IMAGE;
    if (category === "취업") return EMPLOY_IMAGE;
    if (category === "공무원") return OFFICIAL_IMAGE;
    if (category === "독서논술") return BOOK_IMAGE;
    return DEFAULT_IMAGE;
  };

  return (
    <Wrapper>
      <Title>스터디 목록</Title>

      <List>
        {showStudyList.map((cur, index) => (
          <StudyCard
            onClick={onStudyCardClick(cur.id)}
            title={cur.title}
            imageURL={renderCoverImage(cur.category)}
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
