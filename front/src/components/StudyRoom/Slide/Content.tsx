import React, { useEffect } from "react";
import styled from "styled-components";
import p5 from "p5";
import Information from "./Information";
import SlideCanvas from "./SlideCanvas";
import SlideImage from "./SlideImage";
import useSocket from "../../../hooks/useSocket";
import { useRouteMatch } from "react-router";
import useUser from "../../../hooks/useUser";
import SOCKET_TYPE from "../../../constants/socket-type";

const Wrapper = styled.div`
  width: 100%;
  height: 800px;

  display: flex;
  justify-content: space-between;

  background-color: #333;

  position: absolute;
  top: 100px;
  left: 0;
`;

const StudyButton: React.FC = () => {
  const { main: socket } = useSocket();
  const { user } = useUser();
  const match = useRouteMatch<{ id: string }>();

  useEffect(() => {
    if (!user) return;
    new p5(SlideCanvas(match.params.id, user.id, socket));

    return () => {
      socket.off(SOCKET_TYPE.DRAW);
      socket.off(SOCKET_TYPE.ERASE);
      socket.off(SOCKET_TYPE.IMAGE_CHANGE);
    };
  }, [socket, user, match]);

  return (
    <Wrapper id="Slide__content">
      <Information></Information>
      <SlideImage></SlideImage>
    </Wrapper>
  );
};

export default StudyButton;
