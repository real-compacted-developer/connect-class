import React from "react";
import styled from "styled-components";
import Axios from "axios";
import { RouteComponentProps, withRouter } from "react-router-dom";

import config from "../config";

import CreateSideBar from "../components/StudyCreate/CreateSideBar";
import Header from "../components/StudyCreate/Header";
import StudyNameInput from "../components/StudyCreate/StudyNameInput";
import StudyCategoryInput from "../components/StudyCreate/StudyCategoryInput";
import StudyMaxPeopleInput from "../components/StudyCreate/StudyMaxPeopleInput";
import StudyPasswordInput from "../components/StudyCreate/StudyPasswordInput";
import CreateButton from "../components/StudyCreate/CreateForm/CreateButton";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const BodyWrapper = styled.div`
  flex-direction: column;
`;

const Body = styled.div`
  margin-left: 14vw;
  margin-top: 65px;

  @media screen and (max-width: 1000px) {
    margin-left: 5rem;
  }
`;

const Title = styled.h1`
  font-family: "Gmarket Sans";
  font-size: 30px;
  font-weight: bold;
  color: #34363b;
`;

const SubTitle = styled.p`
  font-family: "Spoqa Han Sans";
  font-size: 18px;
  color: #9a9fac;
`;

const Blank = styled.div<{ value: number }>`
  margin-top: ${(props) => props.value}px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

type State = {
  name: string;
  category: string;
  people: number;
  password: string;
};

class StudyCreate extends React.Component<RouteComponentProps, State> {
  constructor(props: any) {
    super(props);

    this.state = {
      name: "",
      category: "",
      people: 0,
      password: "",
    };

    this.createStudy = this.createStudy.bind(this);
  }

  onNameInputChange(e: any) {
    this.setState({
      name: e.target.value,
    });
  }

  onCategoryInputChange(e: any) {
    this.setState({
      category: e.target.value,
    });
  }

  onPeopleInputChange(e: any) {
    this.setState({
      people: parseInt(e.target.value, 10),
    });
  }

  onPasswordInputChange(e: any) {
    this.setState({
      password: e.target.value,
    });
  }

  async createStudy() {
    if (
      this.state.name === "" ||
      this.state.category === "" ||
      this.state.people === 0 ||
      this.state.password === ""
    ) {
      alert("빈 칸이 있습니다.");
      return;
    }

    const passwordRegex = /^[A-Za-z0-9+]{4,15}$/;
    if (!passwordRegex.test(this.state.password)) {
      alert(
        "비밀번호는 4자리 ~ 15자리로 이루어진 영문 또는 숫자이어야 합니다."
      );
      return;
    }

    await Axios.post(`${config.API}/api/study`, {
      title: this.state.name,
      category: this.state.category,
      limitCount: this.state.people,
      password: this.state.password,
      isPremium: false,
    });

    alert("스터디가 생성되었습니다! 스터디로 이동합니다.");
    this.props.history.push(`/study/${this.state.name}`);
  }

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
            <StudyNameInput
              onChange={this.onNameInputChange.bind(this)}
              value={this.state.name}
            />

            <Blank value={85} />
            <StudyCategoryInput
              onChange={this.onCategoryInputChange.bind(this)}
            />

            <Blank value={85} />
            <StudyMaxPeopleInput
              onChange={this.onPeopleInputChange.bind(this)}
            />

            <Blank value={85} />
            <StudyPasswordInput
              onChange={this.onPasswordInputChange.bind(this)}
              value={this.state.password}
            />

            <Blank value={81} />
            <ButtonWrapper>
              <CreateButton onClick={this.createStudy} />
            </ButtonWrapper>
          </Body>
        </BodyWrapper>
      </Wrapper>
    );
  }
}

export default withRouter(StudyCreate);
