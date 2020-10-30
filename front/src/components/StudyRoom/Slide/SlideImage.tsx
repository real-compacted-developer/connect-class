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

const ButtonWrapper = styled.div`
  position: fixed;
  top: 0;
  z-index: 5000;
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
  const socket = useSocket();
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

  const renderImage = () => {
    const { urlInfo } = image;
    return <ImageWrapper imageURL={urlInfo} />;
  };

  return (
    <Wrapper>
      <ButtonWrapper>
        <button onClick={onPrevImage}> 이전 슬라이드</button>
        <button onClick={onNextImage}> 다음 슬라이드</button>
      </ButtonWrapper>
      {renderImage()}
    </Wrapper>
  );
};

export default SlideImage;
