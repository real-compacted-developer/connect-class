import React from "react";
import styled from "styled-components";

import QuestionList from "../components/StudyRoom/QuestionList";
import SlideView from "../components/StudyRoom/SlideView";

import { socket } from "..";
import SOCKET_TYPE from "../constants/socket-type";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
`;

class StudyRoom extends React.Component {
  componentDidMount() {
    // TODO: 실제 방 ID하고 유저 ID 가져오는거 구현
    socket.emit(SOCKET_TYPE.JOIN, {
      roomId: 1,
      userId: "사용자1",
    });
  }

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
