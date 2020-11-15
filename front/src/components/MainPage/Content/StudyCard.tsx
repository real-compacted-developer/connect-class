import React from "react";
import styled from "styled-components";

import LazyImage from "../../common/LazyImage";

const Wrapper = styled.div<{ studyData?: boolean }>`
  margin: 0px 35px 35px 0;
  width: 330px;
  height: ${(props) => (props.studyData ? "100%" : "330px")};

  display: flex;
  flex-direction: column;

  cursor: pointer;

  box-shadow: 0 5px 10px 0 rgba(154, 159, 172, 0.17);
`;

const Content = styled.div`
  margin: 15px;
`;

const Title = styled.span`
  width: 149px;
  height: 18px;
  font-family: "Gmarket Sans", sans-serif;
  font-size: 18px;
  font-weight: 500;
  color: #34363b;
`;

const PeopleWrapper = styled.div`
  display: flex;
  flex-direction: row;

  align-items: center;
`;

const PeopleIcon = styled.div`
  width: 30px;
  height: 30px;

  margin-right: 20px;

  background-image: url("https://cdn.zeplin.io/5f2aa3244602602fbd41641d/assets/AB620704-1C08-478E-A6F5-6A7D930EE24F.svg");
`;

const PeopleCount = styled.p`
  height: 20px;
  font-family: "Gmarket Sans", sans-serif;
  font-size: 17px;
  font-weight: bold;
  color: #d0d4de;
`;

type Props = {
  imageURL?: string;
  isStudyData?: boolean;
  title: string;
  currentPeople: number;
  totalPeople: number;
  onClick?: React.MouseEventHandler;
};

const StudyCard: (props: Props) => JSX.Element = (props: Props) => {
  return (
    <Wrapper onClick={props.onClick} studyData={props.isStudyData}>
      {props.imageURL && (
        <LazyImage width={"100%"} height={"330px"} imageURL={props.imageURL} />
      )}
      <Content>
        <Title>{props.title}</Title>
        <PeopleWrapper>
          <PeopleIcon />
          <PeopleCount>
            {props.currentPeople} / {props.totalPeople}
          </PeopleCount>
        </PeopleWrapper>
      </Content>
    </Wrapper>
  );
};

export default StudyCard;
