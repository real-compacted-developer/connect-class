import React from "react";
import styled from "styled-components";

import useQuestionData from "../../hooks/useQuestionData";

import Header from "./Question/Header";
import Content from "./Question/Content";
import Form from "./Question/Form";

const Wrapper = styled.div`
  width: 467px;
  height: 100vh;

  position: relative;

  background-color: #fff;
`;

const QuestionList = (): JSX.Element => {
  const roomNumber = window.location.pathname.split("/study/")[1];

  const { questions, addQuestions } = useQuestionData(roomNumber);

  return (
    <Wrapper>
      <Header />
      <Content questions={questions !== null ? questions : []}></Content>
      <Form addQuestions={addQuestions} />
    </Wrapper>
  );
};

export default QuestionList;
