import React from "react";
import styled from "styled-components";

const InputTitle = styled.p`
  font-family: "Gmarket Sans";
  font-size: 20px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: left;
  color: #9a9fac;
`;

const InputForm = styled.input`
  width: 660px;
  height: 30px;
  border: none;
  border-bottom: 1px #9a9fac solid;

  color: #346bff;
  font-weight: bold;
  font-family: "Spoqa Han Sans";
`;

export default class StudyPasswordInput extends React.Component {
  render() {
    return (
      <>
        <InputTitle>비밀번호</InputTitle>
        <InputForm placeholder="(4자리~15자리 영문, 숫자로 입력해주세요.)" />
      </>
    );
  }
}
