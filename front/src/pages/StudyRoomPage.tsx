import React, { useEffect } from "react";
import styled from "styled-components";
import { useRouteMatch } from "react-router-dom";
import QuestionList from "../components/StudyRoom/QuestionList";
import SlideView from "../components/StudyRoom/SlideView";
import { socket } from "../index";
import SOCKET_TYPE from "../constants/socket-type";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../modules";
import { initUser } from "../modules/user";

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
  const dispatch = useDispatch();

  useEffect(() => {
    const roomId = match.params.id;
    // TODO: 유저 ID 가져오는거 구현
    socket.emit(SOCKET_TYPE.JOIN, {
      roomId: roomId,
      userId: "사용자1",
    });

    dispatch(initUser());
  }, [match, dispatch]);

  return (
    <Wrapper>
      <SlideView></SlideView>
      <QuestionList></QuestionList>
    </Wrapper>
  );
};

export default StudyRoom;
