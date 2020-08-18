import React from "react";
import styled from "styled-components";

const Button = styled.button`
  width: 355px;
  height: 64px;
  border-radius: 32px;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.08);
  background-color: #ffffff;
  border: none;

  font-family: "Gmarket Sans";
  font-size: 22px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.18;
  letter-spacing: normal;
  text-align: center;
  color: #d0d4de;

  cursor: pointer;

  &:hover {
    background-color: #346bff;
    color: #ffffff;
  }
`;

export default class CreateButton extends React.Component {
  render() {
    return <Button>스터디 개설하기</Button>;
  }
}
