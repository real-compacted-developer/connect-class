import React, { useState } from "react";
import styled from "styled-components";
import Axios from "axios";
import { useHistory } from "react-router-dom";
import CreateSideBar from "../components/StudyCreate/CreateSideBar";
import Header from "../components/StudyCreate/Header";
import StudyNameInput from "../components/StudyCreate/StudyNameInput";
import StudyCategoryInput from "../components/StudyCreate/StudyCategoryInput";
import StudyMaxPeopleInput from "../components/StudyCreate/StudyMaxPeopleInput";
import StudyPasswordInput from "../components/StudyCreate/StudyPasswordInput";
import CreateButton from "../components/StudyCreate/CreateForm/CreateButton";
import useUser from "../hooks/useUser";

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
    margin-left: 2rem;
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

const StudyCreate: React.FC = () => {
  const history = useHistory();
  const [input, setInput] = useState<State>({
    name: "",
    category: "",
    people: 0,
    password: "",
  });
  const { user, error } = useUser();

  const onInputChange = (key: keyof State) => (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    e.persist();

    setInput((current) => ({
      ...current,
      [key]: e.target.value,
    }));
  };

  const createStudy = async () => {
    if (!user) return;
    if (error) {
      console.error(error);
      return;
    }

    if (
      input.name.trim() === "" ||
      input.category.trim() === "" ||
      input.people === 0 ||
      input.password.trim() === ""
    ) {
      alert("빈 칸이 있습니다.");
      return;
    }

    const passwordRegex = /^[A-Za-z0-9+]{4,15}$/;
    if (!passwordRegex.test(input.password)) {
      alert(
        "비밀번호는 4자리 ~ 15자리로 이루어진 영문 또는 숫자이어야 합니다."
      );
      return;
    }

    const res = await Axios.post(`${process.env.REACT_APP_STUDY_LAYER}/group`, {
      title: input.name,
      category: input.category,
      maxPeople: input.people,
      password: input.password,
      owner: user.id,
      isPremium: false,
    });

    Axios.get(
      `${process.env.REACT_APP_STUDY_LAYER}/group/data/${res.data.data.id}`
    ).then((res) => {
      if (!res.data.data) return;
      alert("스터디가 생성되었습니다! 스터디로 이동합니다.");
      history.push(`/study/${res.data.data.id}`);
    });
  };

  return (
    <Wrapper>
      <CreateSideBar />
      <BodyWrapper>
        <Header />
        <Body>
          <Title>스터디 개설하기</Title>
          <SubTitle>만들고 싶은 스터디를 직접 만들고 참여해보세요.</SubTitle>

          <Blank value={65} />
          <StudyNameInput onChange={onInputChange("name")} value={input.name} />

          <Blank value={85} />
          <StudyCategoryInput onChange={onInputChange("category")} />

          <Blank value={85} />
          <StudyMaxPeopleInput onChange={onInputChange("people")} />

          <Blank value={85} />
          <StudyPasswordInput
            onChange={onInputChange("password")}
            value={input.password}
          />

          <Blank value={81} />
          <ButtonWrapper>
            <CreateButton onClick={createStudy} />
          </ButtonWrapper>
        </Body>
      </BodyWrapper>
    </Wrapper>
  );
};

export default StudyCreate;
