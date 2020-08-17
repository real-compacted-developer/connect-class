import React, { Component } from "react";
import styled from "styled-components";

import Header from "./Question/Header";
import Content from "./Question/Content";
import Form from "./Question/Form";

const Wrapper = styled.div`
  width: 467px;
  height: 100vh;

  position: relative;

  background-color: #fff;
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
        <Header></Header>
        <Content></Content>
        <Form></Form>
      </Wrapper>
    );
  }
}
