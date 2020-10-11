import React from "react";
import styled from "styled-components";

import Category from "./Category";
import StudyList from "./StudyList";

const Wrapper = styled.div`
  width: calc(100% - 311px);
  height: 100%;

  display: flex;
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
