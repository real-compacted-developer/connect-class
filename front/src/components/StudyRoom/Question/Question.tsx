import React, { Component } from "react";
import styled from "styled-components";

const Wrapper = styled.li`
  width: calc(100% - 20px);
  padding: 10px;
  display: flex;
`;

const Content = styled.div`
  width: 80%;
  height: 257px;
  background-color: #f0f1f4;
  border-radius: 20px;
`;

const User = styled.div`
  height: calc(inherit - 20px);
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding: 10px 0 10px 0;
`;

const Icon = styled.div`
  width: 35px;
  height: 35px;

  background-color: blue;
  border-radius: 35px;
  object-fit: contain;
`;

const Name = styled.p`
  height: 12px;
  font-family: "Gmarket Sans";
  font-size: 12px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.08;
  letter-spacing: normal;
  text-align: left;
  color: #000000;

  margin: 0;
  padding: 0;
`;

type Props = {};

type States = {};

export default class QuestionList extends Component<Props, States> {
  render() {
    return (
      <Wrapper>
        <User>
          <Icon></Icon>
          <Name>유저네임</Name>
        </User>

        <Content></Content>
      </Wrapper>
    );
  }
}
