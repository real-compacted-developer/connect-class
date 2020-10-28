import React from "react";
import styled from "styled-components";
import { RouteComponentProps } from "react-router-dom";

import QuestionSection from "../components/StudyRoom/QuestionSection";
import SlideView from "../components/StudyRoom/SlideView";

import { socket } from "../index";
import SOCKET_TYPE from "../constants/socket-type";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
`;

type Params = {
  id: string;
};

class StudyRoom extends React.Component<RouteComponentProps<Params>> {
  componentDidMount() {
    const roomId = this.props.match.params.id;
    // TODO: 실제 방 ID하고 유저 ID 가져오는거 구현
    socket.emit(SOCKET_TYPE.JOIN, {
      roomId: roomId,
      userId: "사용자1",
    });
  }

  render() {
    return (
      <Wrapper>
        <SlideView></SlideView>
        <QuestionSection></QuestionSection>
      </Wrapper>
    );
  }
}

export default StudyRoom;
