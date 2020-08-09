import React, { Component } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 60px;

  position: absolute;
  top: 0;

  box-shadow: 0 3px 15px 0 rgba(0, 0, 0, 0.06);
  background-color: #ffffff;

  z-index: 1000;
`;

type Props = {};

type States = {};

export default class Form extends Component<Props, States> {
  constructor(props: Props) {
    super(props);
  }

  componentWillMount() {}

  componentDidMount() {}

  render() {
    return <Wrapper></Wrapper>;
  }
}
