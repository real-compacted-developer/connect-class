import React, { useEffect } from "react";
import styled from "styled-components";

import Question from "./Question/Question";

import { IQuestionInfo } from "../../../types/question";

const Wrapper = styled.ul`
  width: 100%;
  height: calc(100% - 80px);

  overflow-y: auto;
  padding: 0;
  margin: 0;
`;

type Props = {
  questions: IQuestionInfo[];
};

const QuestionList = (props: Props): JSX.Element => {
  const { questions } = props;

  return (
    <Wrapper
      ref={(element: HTMLUListElement | null) => {
        if (element === null) return;
        element.scrollTo({ top: element.scrollHeight, behavior: "smooth" });
        console.log("useEffect");
      }}
    >
      {questions?.map((cur, index) => (
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
