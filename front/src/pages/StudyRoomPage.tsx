import React, { useEffect } from "react";
import styled from "styled-components";
import { useRouteMatch } from "react-router-dom";
import QuestionSection from "../components/StudyRoom/QuestionSection";
import SlideView from "../components/StudyRoom/SlideView";
import SOCKET_TYPE from "../constants/socket-type";
import useSocket from "../hooks/useSocket";
import useUser from "../hooks/useUser";

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
  const { user, error } = useUser();
  const socket = useSocket();

  useEffect(() => {
    if (!user) return;
    const roomId = match.params.id;
    socket.emit(SOCKET_TYPE.JOIN, {
      roomId: roomId,
      userId: user.id,
    });
  }, [match, user, socket]);

  return (
    <Wrapper>
      <SlideView></SlideView>
      <QuestionSection></QuestionSection>
    </Wrapper>
  );
};

export default StudyRoom;
