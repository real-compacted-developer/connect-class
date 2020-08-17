import React from "react";
import styled from "styled-components";
import CreateSideBar from "../components/StudyCreate/CreateSideBar";
import Header from "../components/StudyCreate/Body/Header";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

class StudyCreate extends React.Component {
  render() {
    return (
      <Wrapper>
        <CreateSideBar />
        <Header />
      </Wrapper>
    );
  }
}

export default StudyCreate;
