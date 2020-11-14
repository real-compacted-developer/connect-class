import React, { useState } from "react";
import styled from "styled-components";
import Axios from "axios";
import { useHistory } from "react-router-dom";
import SideBar from "../components/SideBar";
import Header from "../components/MainPage/Header";
import StudyNameInput from "../components/StudyCreate/StudyNameInput";
import StudyCategoryInput from "../components/StudyCreate/StudyCategoryInput";
import StudyMaxPeopleInput from "../components/StudyCreate/StudyMaxPeopleInput";
import StudyPasswordInput from "../components/StudyCreate/StudyPasswordInput";
import CreateButton from "../components/StudyCreate/CreateForm/CreateButton";
import useUser from "../hooks/useUser";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
`;

const BodyWrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
`;

const Body = styled.div`
  margin-top: 125px;

  width: calc(100% - 311px);
  height: 100%;

  display: flex;

  justify-content: center;
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

    alert("스터디가 생성되었습니다! 스터디 자료를 업로드하여 시작하세요.");
    history.push(`/dashboard/${res.data.data.id}`);
  };

  return (
    <Wrapper>
      <Header />
      <BodyWrapper>
        <SideBar />
        <Body>
          <div>
            <Title>스터디 개설하기</Title>
            <SubTitle>만들고 싶은 스터디를 직접 만들고 참여해보세요.</SubTitle>

            <Blank value={65} />
            <StudyNameInput
              onChange={onInputChange("name")}
              value={input.name}
            />

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
          </div>
        </Body>
      </BodyWrapper>
    </Wrapper>
  );
};

export default StudyCreate;
