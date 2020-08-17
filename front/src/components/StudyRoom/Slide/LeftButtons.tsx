import React, { Component } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 300px;
  padding: 0 50px 0 50px;
  height: 80px;

  display: flex;
  justify-content: space-between;

  position: absolute;
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
      <Wrapper>
        <button>동기화</button>
        <button>채널 공유</button>
        <button>다운로드</button>
      </Wrapper>
    );
  }
}
