import React, { Component } from "react";
import styled from "styled-components";
import { socket } from "../../../index";
import SOCKET_TYPE from "../../../constants/socket-type";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { drawState } from "./SlideCanvas";
import PencilButton from "./Buttons/PencilButton";
import PresentButton from "./Buttons/PresentButton";
import ExitButton from "./Buttons/ExitButton";
import { SketchPicker } from "react-color";
import EraseButton from "./Buttons/EraseButton";

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

class StudyButton extends Component<
  Props & RouteComponentProps<Params>,
  States
> {
  constructor(props: Props & RouteComponentProps<Params>) {
    super(props);
    this.exit = this.exit.bind(this);
    this.handleDrawClick = this.handleDrawClick.bind(this);
    this.closeColorPicker = this.closeColorPicker.bind(this);
    this.handleChangeColor = this.handleChangeColor.bind(this);

    this.state = {
      toggleDraw: true,
      isDisplayColorPicker: false,
      color: "#FF00FF",
    };
  }

  exit() {
    // TODO: 로그인 & 회원가입 추가 후 userId(이메일) 가져오는거 구현
    socket.emit(SOCKET_TYPE.EXIT, {
      roomId: this.props.match.params.id,
      userId: "사용자1",
    });
  }

  closeColorPicker() {
    this.setState((current) => ({
      ...current,
      isDisplayColorPicker: false,
    }));

    drawState.isDraw = true;
  }

  handleDrawClick(e: any) {
    e.preventDefault();

    if (e.type === "contextmenu") {
      drawState.isDraw = false;
      return;
    }

    this.setState((current) => ({
      ...current,
      isDisplayColorPicker: !current.isDisplayColorPicker,
    }));

    drawState.isDraw = this.state.isDisplayColorPicker;
  }

  handleChangeColor(color: any) {
    this.setState((current) => ({
      ...current,
      color: color.hex,
    }));
    drawState.color = color.hex;
  }

  render() {
    return (
      <Wrapper>
        {this.state.isDisplayColorPicker && (
          <ContextMenu>
            <ContextCover onClick={this.closeColorPicker} />
            <SketchPicker
              color={this.state.color}
              onChange={this.handleChangeColor}
            />
          </ContextMenu>
        )}
        <PencilButton
          onClick={this.handleDrawClick}
          onContextMenu={this.handleDrawClick}
        />
        <EraseButton id="Slide__erase" />
        <PresentButton />
        <ExitButton onClick={this.exit}>종료</ExitButton>
      </Wrapper>
    );
  }
}

export default withRouter(StudyButton);
