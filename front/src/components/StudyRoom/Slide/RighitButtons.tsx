import React, { Component } from "react";
import styled from "styled-components";
import { socket } from "../../../index";
import SOCKET_TYPE from "../../../constants/socket-type";
import { RouteComponentProps, withRouter } from "react-router-dom";

const Wrapper = styled.div`
  width: 300px;
  padding: 0 50px 0 50px;
  height: 80px;

  display: flex;
  justify-content: space-between;

  position: absolute;
  right: 0;
`;

type Props = {};

type States = {};

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
  }

  componentWillMount() {}

  componentDidMount() {}

  exit() {
    // TODO: 실제 방 ID하고 유저 ID 가져오는거 구현
    socket.emit(SOCKET_TYPE.EXIT, {
      roomId: this.props.match.params.id,
      userId: "사용자1",
    });
  }

  render() {
    return (
      <Wrapper>
        <button>필기하기</button>
        <button>선물</button>
        <button onClick={this.exit}>종료</button>
      </Wrapper>
    );
  }
}

export default withRouter(StudyButton);
