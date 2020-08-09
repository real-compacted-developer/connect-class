import React, { Component } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 120px;

  position: absolute;
  bottom: 0;
  background-color: #f8fafd;
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
