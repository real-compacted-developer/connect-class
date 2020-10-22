import React, { Component, useState } from "react";
import styled from "styled-components";
import { socket } from "../../../index";
import SOCKET_TYPE from "../../../constants/socket-type";
import {
  RouteComponentProps,
  useRouteMatch,
  withRouter,
} from "react-router-dom";
import { drawState } from "./SlideCanvas";
import PencilButton from "./Buttons/PencilButton";
import PresentButton from "./Buttons/PresentButton";
import ExitButton from "./Buttons/ExitButton";
import { SketchPicker } from "react-color";
import EraseButton from "./Buttons/EraseButton";
import { RootState } from "../../../modules";
import { useSelector } from "react-redux";

const Wrapper = styled.div`
  width: 360px;
  padding: 0 50px 0 50px;
  height: 80px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  position: absolute;
  right: 0;
`;

const ContextMenu = styled.div`
  position: absolute;
  margin-top: -12.2rem;
  z-index: 2000;
`;

const ContextCover = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

type Props = {};

type States = {
  toggleDraw: boolean;
  isDisplayColorPicker: boolean;
  color: any;
};

type Params = {
  id: string;
};

const StudyButton: React.FC<Props> = () => {
  const match = useRouteMatch<Params>();
  const [drawSetting, setDrawSetting] = useState<States>({
    toggleDraw: true,
    isDisplayColorPicker: false,
    color: "#FF00FF",
  });
  const socket = useSelector((state: RootState) => state.socket);

  const exit = () => {
    // TODO: 로그인 & 회원가입 추가 후 userId(이메일) 가져오는거 구현
    socket.emit(SOCKET_TYPE.EXIT, {
      roomId: match.params.id,
      userId: "사용자1",
    });
  };

  const closeColorPicker = () => {
    setDrawSetting((current) => ({
      ...current,
      isDisplayColorPicker: false,
    }));

    drawState.isDraw = true;
  };

  const handleDrawClick = (e: React.MouseEvent) => {
    e.preventDefault();

    if (e.type === "contextmenu") {
      drawState.isDraw = false;
      return;
    }

    setDrawSetting((current) => ({
      ...current,
      isDisplayColorPicker: !current.isDisplayColorPicker,
    }));

    drawState.isDraw = drawSetting.isDisplayColorPicker;
  };

  const handleChangeColor = (color: any) => {
    setDrawSetting((current) => ({
      ...current,
      color: color.hex,
    }));
    drawState.color = color.hex;
  };

  return (
    <Wrapper>
      {drawSetting.isDisplayColorPicker && (
        <ContextMenu>
          <ContextCover onClick={closeColorPicker} />
          <SketchPicker
            color={drawSetting.color}
            onChange={handleChangeColor}
          />
        </ContextMenu>
      )}
      <PencilButton onClick={handleDrawClick} onContextMenu={handleDrawClick} />
      <EraseButton id="Slide__erase" />
      <PresentButton />
      <ExitButton onClick={exit}>종료</ExitButton>
    </Wrapper>
  );
};

export default StudyButton;
