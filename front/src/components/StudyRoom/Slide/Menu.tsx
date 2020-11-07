import React, { Component } from "react";
import styled from "styled-components";

// import LeftButtons from "./LeftButtons";
import RightButtons from "./RightButtons";

const Wrapper = styled.div`
  width: 100%;
  height: 80px;

  position: absolute;
  bottom: 0;

  background-color: #ffffff;

  z-index: 1000;
`;

type Props = {};

type States = {};

export default class Menu extends Component<Props, States> {
  render() {
    return (
      <Wrapper>
        {/* <LeftButtons /> */}
        <RightButtons />
      </Wrapper>
    );
  }
}
