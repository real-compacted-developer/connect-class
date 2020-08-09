import React, { Component } from "react";
import styled from "styled-components";

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

export default class StudyButton extends Component<Props, States> {
  constructor(props: Props) {
    super(props);
  }

  componentWillMount() {}

  componentDidMount() {}

  render() {
    return (
      <Wrapper>
        <button>필기하기</button>
        <button>선물</button>
        <button>종료</button>
      </Wrapper>
    );
  }
}
