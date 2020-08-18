import React, { Component } from "react";
import styled from "styled-components";
import io from "socket.io-client";
import p5 from "p5";

import Information from "./Information";
import SlideCanvas from "./SlideCanvas";

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

type Props = {};

type States = {};

export default class StudyButton extends Component<Props, States> {
  constructor(props: Props) {
    super(props);
  }

  componentWillMount() {}

  componentDidMount() {
    new p5(SlideCanvas(1)); // TODO: 실제 slideId로 넣어야함
  }

  render() {
    return (
      <Wrapper>
        <Information></Information>
      </Wrapper>
    );
  }
}
