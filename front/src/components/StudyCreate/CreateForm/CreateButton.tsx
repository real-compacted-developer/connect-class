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
  text-align: center;
  color: #d0d4de;

  cursor: pointer;

  &:hover {
    background-color: #346bff;
    color: #ffffff;
  }

  @media screen and (max-width: 1000px) {
    width: 200px;
    font-size: 18px;
  }
`;

type Props = {
  onClick?: any;
};

const CreateButton: React.FC<Props> = ({ onClick }) => {
  return <Button onClick={onClick}>스터디 개설하기</Button>;
};

export default CreateButton;
