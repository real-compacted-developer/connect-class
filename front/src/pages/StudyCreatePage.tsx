import React from "react";
import styled from "styled-components";
import CreateSideBar from "../components/StudyCreate/CreateSideBar";
import Header from "../components/StudyCreate/Body/Header";
import StudyNameInput from "../components/StudyCreate/StudyNameInput";
import StudyCategoryInput from "../components/StudyCreate/StudyCategoryInput";
import StudyMaxPeopleInput from "../components/StudyCreate/StudyMaxPeopleInput";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const BodyWrapper = styled.div`
  flex-direction: column;
`;

const Body = styled.div`
  width: 1609px;
  margin: auto 312px;
  margin-top: 65px;
`;

const Title = styled.h1`
  font-family: "Gmarket Sans";
  font-size: 30px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: left;
  color: #34363b;
`;

const SubTitle = styled.p`
  font-family: "Spoqa Han Sans";
  font-size: 18px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: left;
  color: #9a9fac;
`;

const Blank = styled.div<{ value: number }>`
  margin-top: ${(props) => props.value}px;
`;

class StudyCreate extends React.Component {
  render() {
    return (
      <Wrapper>
        <CreateSideBar />
        <BodyWrapper>
          <Header />
          <Body>
            <Title>스터디 개설하기</Title>
            <SubTitle>만들고 싶은 스터디를 직접 만들고 참여해보세요.</SubTitle>
            <Blank value={65} />
            <StudyNameInput />
            <Blank value={85} />
            <StudyCategoryInput />
            <Blank value={85} />
            <StudyMaxPeopleInput />
          </Body>
        </BodyWrapper>
      </Wrapper>
    );
  }
}

export default StudyCreate;
