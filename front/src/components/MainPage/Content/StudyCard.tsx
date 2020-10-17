import React from "react";
import styled from "styled-components";

import LazyImage from "../../common/LazyImage";

const Wrapper = styled.div`
  margin: 0px 20px 20px 0;
  width: 330px;
  height: 330px;

  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  margin: 15px;
`;

const Title = styled.span`
  width: 149px;
  height: 18px;
  font-family: GmarketSans;
  font-size: 18px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.22;
  letter-spacing: normal;
  text-align: left;
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
  font-family: GmarketSans;
  font-size: 17px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.18;
  letter-spacing: 3.4px;
  text-align: left;
  color: #d0d4de;
`;

type Props = {
  imageURL: string;
  title: string;
  currentPeople: number;
  totalPeople: number;
};

const StudyCard: (props: Props) => JSX.Element = (props: Props) => {
  return (
    <Wrapper>
      <LazyImage width={"100%"} height={"330px"} imageURL={props.imageURL} />
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
