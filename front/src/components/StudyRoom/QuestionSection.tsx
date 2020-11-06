import React, { useEffect } from "react";
import styled from "styled-components";

import useQuestionData from "../../hooks/useQuestionData";
// import useUser from "../../hooks/useUser";
import SOCKET_TYPE from "../../constants/socket-type";
import useSocket from "../../hooks/useSocket";

import { IQuestionInfo } from "../../types/question";

import Header from "./Question/Header";
import Content from "./Question/Content";
import Form from "./Question/Form";

const Wrapper = styled.div`
  width: 467px;
  height: 100vh;

  position: relative;

  background-color: #fff;
`;

const QuestionSection = (): JSX.Element => {
  const roomNumber = window.location.pathname.split("/study/")[1];

  const { questions, addQuestion } = useQuestionData(roomNumber);
  const { main: socket } = useSocket();

  useEffect(() => {
    socket.on(SOCKET_TYPE.GET_NEW_QUESTION, (data: IQuestionInfo) => {
      addQuestion(data);
    });
  }, [socket]);

  return (
    <Wrapper>
      <Header />
      <Content questions={questions}></Content>
      <Form />
    </Wrapper>
  );
};

export default QuestionSection;
