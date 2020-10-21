import React, { useEffect } from "react";
import styled from "styled-components";
import { useRouteMatch } from "react-router-dom";
import QuestionList from "../components/StudyRoom/QuestionList";
import SlideView from "../components/StudyRoom/SlideView";
import { socket } from "../index";
import SOCKET_TYPE from "../constants/socket-type";
import { useSelector } from "react-redux";
import { RootState } from "../modules";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
`;

type Params = {
  id: string;
};

const StudyRoom: React.FC = () => {
  const match = useRouteMatch<Params>();
  const user = useSelector((state: RootState) => state.user.user);

  useEffect(() => {
    if (!user) return;
    const roomId = match.params.id;
    socket.emit(SOCKET_TYPE.JOIN, {
      roomId: roomId,
      userId: user.id,
    });
  }, [match, user]);

  return (
    <Wrapper>
      <SlideView></SlideView>
      <QuestionList></QuestionList>
    </Wrapper>
  );
};

export default StudyRoom;
