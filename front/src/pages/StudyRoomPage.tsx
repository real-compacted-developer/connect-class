import React, { useEffect } from "react";
import styled from "styled-components";
import { useHistory, useRouteMatch } from "react-router-dom";
import QuestionSection from "../components/StudyRoom/QuestionSection";
import SlideView from "../components/StudyRoom/SlideView";
import SOCKET_TYPE from "../constants/socket-type";
import useSocket from "../hooks/useSocket";
import useUser from "../hooks/useUser";
import Axios from "axios";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
`;

type Params = {
  id: string;
};

const StudyRoom: React.FC = () => {
  const history = useHistory();
  const match = useRouteMatch<Params>();
  const { user } = useUser();
  const { main: socket, study } = useSocket();

  useEffect(() => {
    if (!user) return;
    const roomId = match.params.id;

    Axios.get(`${process.env.REACT_APP_DB_LAYER}/studydata/${roomId}`).then(
      (res) => {
        if (!res.data.success) {
          alert("존재하지 않는 스터디입니다.");
          history.push("/");
        } else {
          socket.emit(SOCKET_TYPE.JOIN, {
            roomId,
            userId: user.id,
          });

          study.emit(SOCKET_TYPE.JOIN, {
            roomId,
            userId: user.id,
          });
        }
      }
    );
  }, [match, user, socket, study]);

  return (
    <Wrapper>
      <SlideView></SlideView>
      <QuestionSection></QuestionSection>
    </Wrapper>
  );
};

export default StudyRoom;
