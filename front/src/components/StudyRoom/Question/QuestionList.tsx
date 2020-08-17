import React, { Component } from "react";
import styled from "styled-components";

import Question from "./Question";

const Wrapper = styled.ul`
  width: 100%;
  height: calc(100% - 80px);

  overflow-y: auto;
  padding: 0;
  margin: 0;
`;

type Props = {};

type States = {};

export default class QuestionList extends Component<Props, States> {
  constructor(props: Props) {
    super(props);
  }

  componentWillMount() {}

  componentDidMount() {}

  render() {
    return (
      <Wrapper>
        <Question></Question>
        <Question></Question>
        <Question></Question>
      </Wrapper>
    );
  }
}
