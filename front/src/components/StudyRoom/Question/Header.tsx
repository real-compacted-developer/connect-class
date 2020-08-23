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

const MenuButton = styled.button`
  width: 30px;
  height: 30px;
  margin: 15px;

  background-color: transparent;

  position: absolute;
  right: 20px;

  background-image: url("https://cdn.zeplin.io/5f2aa3244602602fbd41641d/assets/8A1B6F6C-32D3-4A04-A0BF-31585ADFBEFE.svg");
  background-repeat: none;
  background-size: 30px 30px;

  border: none;
  outline: none;
`;

type Props = {};

type States = {};

export default class Form extends Component<Props, States> {
  render() {
    return (
      <Wrapper>
        <MenuButton></MenuButton>
      </Wrapper>
    );
  }
}
