import React from "react";
import styled from "styled-components";

const InputTitle = styled.p`
  font-family: "Gmarket Sans";
  font-size: 20px;
  font-weight: bold;
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

  @media screen and (max-width: 1000px) {
    width: 300px;
  }
`;

type Props = {
  onChange: any;
  value: string;
};

const StudyNameInput: React.FC<Props> = ({ value, onChange }) => {
  return (
    <>
      <InputTitle>스터디 그룹 이름</InputTitle>
      <InputForm
        placeholder="원하는 스터디 그룹 이름을 적어주세요"
        value={value}
        onChange={onChange}
      />
    </>
  );
};

export default StudyNameInput;
