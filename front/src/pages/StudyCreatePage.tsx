import React from "react";
import styled from "styled-components";
import CreateSideBar from "../components/StudyCreate/CreateSideBar";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

class StudyCreate extends React.Component {
  render() {
    return (
      <>
        <CreateSideBar />
      </>
    );
  }
}

export default StudyCreate;
