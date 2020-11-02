import React, { useEffect } from "react";
import styled from "styled-components";
import p5 from "p5";

import Information from "./Information";
import SlideCanvas from "./SlideCanvas";
import SlideImage from "./SlideImage";
import useSocket from "../../../hooks/useSocket";

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

  useEffect(() => {
    new p5(SlideCanvas(socket));
  }, [socket]);

  return (
    <Wrapper id="Slide__content">
      <Information></Information>
      <SlideImage></SlideImage>
    </Wrapper>
  );
};

export default StudyButton;
