import React from "react";
import styled from "styled-components";

import QuestionList from "../components/StudyRoom/QuestionList";
import SlideView from "../components/StudyRoom/SlideView";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
`;

class StudyRoom extends React.Component {
  render() {
    return (
      <Wrapper>
        <SlideView></SlideView>
        <QuestionList></QuestionList>
      </Wrapper>
    );
  }
}

export default StudyRoom;
