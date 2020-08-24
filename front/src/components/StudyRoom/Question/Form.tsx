import React, { Component } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: calc(100% - 104px);
  height: calc(120px - 24px - 16px);

  padding: 24px 52px 16px 52px;

  position: absolute;
  bottom: 0;
  background-color: #f8fafd;

  display: flex;
  justify-content: space-between;
`;

const Input = styled.input`
  height: 82px;
  width: 200px;

  font-family: "Gmarket Sans";
  font-size: 15px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.67;
  letter-spacing: normal;
  text-align: left;
  color: #9a9fac;

  background-color: transparent;
  outline: none;
  border: none;
`;

const Button = styled.button`
  width: 105px;
  height: 82px;
  border-radius: 12px;
  border: solid 1px #9a9fac;

  outline: none;

  :hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

type Props = {};

type States = {};

export default class Form extends Component<Props, States> {
  render() {
    return (
      <Wrapper>
        <Input placeholder="질문을 입력하세요"></Input>
        <Button>질문하기</Button>
      </Wrapper>
    );
  }
}
