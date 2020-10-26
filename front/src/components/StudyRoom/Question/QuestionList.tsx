import React from "react";
import styled from "styled-components";

import Question from "./Question/Question";

import useQuestionData from "../../../hooks/useQuestionData";

const Wrapper = styled.ul`
  width: 100%;
  height: calc(100% - 80px);

  overflow-y: auto;
  padding: 0;
  margin: 0;
`;

const QuestionList = (): JSX.Element => {
  const roomNumber = window.location.pathname.split("/study/")[1];

  const { response } = useQuestionData(roomNumber);

  return (
    <Wrapper>
      {response?.map((cur, index) => (
        <Question
          key={`question-${index}`}
          userInfo={cur.userInfo}
          content={cur.content}
          slideInfo={cur.slideInfo}
        />
      ))}
    </Wrapper>
  );
};

export default QuestionList;
