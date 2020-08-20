import React, { Component } from "react";
import styled from "styled-components";
import Information from "./Information";

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

  componentDidMount() {}

  render() {
    return (
      <Wrapper id="Slide__content">
        <Information></Information>
      </Wrapper>
    );
  }
}
