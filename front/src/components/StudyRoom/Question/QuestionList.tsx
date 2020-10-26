import React, { useState, useEffect } from "react";
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

type Props = {};

type States = {};

export default (): JSX.Element => {
  const { response, error } = useQuestionData("", {});

  return (
    <Wrapper>
      {response?.map((cur) => (
        <Question
          userInfo={cur.userInfo}
          content={cur.content}
          slideInfo={cur.slideInfo}
        />
      ))}
    </Wrapper>
  );
};
