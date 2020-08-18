import React, { Component } from "react";
import styled from "styled-components";
import { socket } from "../../../index";
import SOCKET_TYPE from "../../../constants/socket-type";
import { RouteComponentProps, withRouter } from "react-router-dom";

import SlideCanvas, { drawState } from "./SlideCanvas";
import p5 from "p5";

import PencilButton from "./Buttons/PencilButton";
import PresentButton from "./Buttons/PresentButton";
import ExitButton from "./Buttons/ExitButton";

const Wrapper = styled.div`
  width: 300px;
  padding: 0 50px 0 50px;
  height: 80px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  position: absolute;
  right: 0;
`;

type Props = {};

type States = {
  toggleDraw: boolean;
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
    this.toggleDraw = this.toggleDraw.bind(this);

    this.state = {
      toggleDraw: true,
    };
  }

  componentWillMount() {}

  componentDidMount() {
    new p5(SlideCanvas(1));
  }

  exit() {
    // TODO: 실제 방 ID하고 유저 ID 가져오는거 구현
    socket.emit(SOCKET_TYPE.EXIT, {
      roomId: this.props.match.params.id,
      userId: "사용자1",
    });
  }

  toggleDraw() {
    this.setState((v) => ({
      toggleDraw: !v.toggleDraw,
    }));
    if (this.state.toggleDraw) {
      const input = prompt("색깔 (HEX)");
      drawState.color = input || "#FF0000";
    }
    drawState.isDraw = this.state.toggleDraw;
  }

  render() {
    return (
      <Wrapper>
        <PencilButton onClick={this.toggleDraw} />
        <PresentButton />
        <ExitButton onClick={this.exit}>종료</ExitButton>
      </Wrapper>
    );
  }
}

export default withRouter(StudyButton);
