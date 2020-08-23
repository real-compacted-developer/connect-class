import React, { Component } from "react";
import styled from "styled-components";

import FullButton from "./Buttons/FullButton";
import SlideImage from "./SlideImage";

import AudioChat from "../AudioChat/AudioChat";

const Wrapper = styled.div`
  width: 100%;
  height: 90px;

  position: absolute;
  top: 0;

  background-color: #000;

  z-index: 1000;
`;

type Props = {};

type States = {};

export default class Header extends Component<Props, States> {
  render() {
    return (
      <Wrapper>
        <SlideImage />
        <AudioChat />
        <FullButton />
      </Wrapper>
    );
  }
}
