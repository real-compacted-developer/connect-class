import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SOCKET_TYPE from "../../../constants/socket-type";
import useSocket from "../../../hooks/useSocket";
import useUser from "../../../hooks/useUser";
import { drawState } from "./SlideCanvas";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const MoveButton = styled.button`
  width: 30px;
  height: 80px;
  background-color: #fff3;
  border-radius: 10px;
  border: none;
  outline: none;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;
  transition: background-color ease 0.5s;
  z-index: 5000;
  position: absolute;
  height: 100%;

  :hover {
    background-color: #fff7;
  }

  &.prev {
    background-image: url("https://cdn.zeplin.io/5f2aa3244602602fbd41641d/assets/47B3F988-F999-425F-BED7-7A3624DC7787.svg");
    left: 5px;
  }

  &.next {
    background-image: url("https://cdn.zeplin.io/5f2aa3244602602fbd41641d/assets/BDAF98EA-E012-4426-B54C-6838E7C85CE8.svg");
    right: 5px;
  }
`;

const ImageWrapper = styled.div<{ imageURL: string }>`
  width: 100%;
  height: 100%;

  background-image: url("${(props): string => props.imageURL}");
  background-repeat: no-repeat;
  background-size: contain;

  background-position: center center;
`;

type States = {
  index: number;
  urlInfo: string;
};

const SlideImage: React.FC = () => {
  const [image, setImage] = useState<States>({
    index: 0,
    urlInfo: "",
  });
  const { main: socket } = useSocket();
  const { user } = useUser();

  useEffect(() => {
    socket.on(SOCKET_TYPE.SYNC, ({ idx, url }: any) => {
      setImage({
        index: idx,
        urlInfo: url,
      });
    });
    socket.on(SOCKET_TYPE.IMAGE_CHANGE, (data: any) => {
      setImage({
        index: data.index,
        urlInfo: data.urlInfo,
      });
      drawState.slideId = data.index;
    });
  }, [socket]);

  const onPrevImage = () => {
    if (!user) return;
    const { index, urlInfo } = image;

    const data = { index: index, urlInfo: urlInfo, userId: user.id };
    socket.emit(SOCKET_TYPE.IMAGE_PREV, data);
  };

  const onNextImage = () => {
    if (!user) return;
    const { index, urlInfo } = image;

    const data = { index: index, urlInfo: urlInfo, userId: user.id };
    socket.emit(SOCKET_TYPE.IMAGE_NEXT, data);
  };

  return (
    <Wrapper>
      <MoveButton className={"prev"} onClick={onPrevImage} />
      <MoveButton className={"next"} onClick={onNextImage} />
      <ImageWrapper imageURL={image.urlInfo} />
    </Wrapper>
  );
};

export default SlideImage;
