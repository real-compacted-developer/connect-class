import React, { Component } from "react";
import styled from "styled-components";

import FullButton from "./Buttons/FullButton";

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
  constructor(props: Props) {
    super(props);
  }

  componentWillMount() {}

  componentDidMount() {}

  render() {
    return (
      <Wrapper>
        <FullButton />
      </Wrapper>
    );
  }
}
