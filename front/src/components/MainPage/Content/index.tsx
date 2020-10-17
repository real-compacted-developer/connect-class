import React from "react";
import styled from "styled-components";

import Category from "./Category";
import StudyList from "./StudyList";

const Wrapper = styled.div`
  margin-top: 60px;

  width: calc(100% - 311px);
  height: 100%;

  display: flex;
  flex-direction: column;
`;

const Content: React.FC = () => {
  return (
    <Wrapper>
      <Category />
      <StudyList />
    </Wrapper>
  );
};

export default Content;
