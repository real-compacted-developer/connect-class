import React, { useState, useEffect } from "react";
import styled from "styled-components";

import Question from "./Question/Question";

import getQuestionData from "../../../fetchs/getQuestionData";
import { IQuestionInfo } from "../../../types/question";

const Wrapper = styled.ul`
  width: 100%;
  height: calc(100% - 80px);

  overflow-y: auto;
  padding: 0;
  margin: 0;
`;

type Props = {};

type States = {};

export default (): JSX.Element => {
  const [questions, setQuestions] = useState<IQuestionInfo[]>();

  useEffect(() => {
    getQuestionData(1).then((questionData) => {
      setQuestions(questionData);
    });
  }, []);

  return (
    <Wrapper>
      {questions?.map((cur) => (
        <Question userInfo={cur.userInfo} content={cur.content} />
      ))}
    </Wrapper>
  );
};
