import React from "react";
import styled from "styled-components";
import PeopleRadio from "./Body/PeopleRadio";

const InputTitle = styled.p`
  font-family: "Gmarket Sans";
  font-size: 20px;
  font-weight: bold;
  color: #9a9fac;
  margin-bottom: 0;
`;

const InputSubTitle = styled.p`
  font-family: "Spoqa Han Sans";
  font-size: 16px;
  color: #9a9fac;
  margin-top: 4px;
`;

const SelectList = styled.div`
  margin-top: 47px;

  display: flex;
  flex-direction: row;
`;

type Props = {
  onChange: any;
};

const StudyMaxPeopleInput: React.FC<Props> = ({ onChange }) => {
  return (
    <>
      <InputTitle>최대인원 설정</InputTitle>
      <InputSubTitle>원하시는 스터디 최대인원을 설정해주세요.</InputSubTitle>

      <SelectList>
        <PeopleRadio value="2" onChange={onChange}>
          2명
        </PeopleRadio>
        <PeopleRadio value="3" onChange={onChange}>
          3명
        </PeopleRadio>
        <PeopleRadio value="4" onChange={onChange}>
          4명
        </PeopleRadio>
        <PeopleRadio value="5" onChange={onChange}>
          5명
        </PeopleRadio>
        <PeopleRadio value="6" onChange={onChange}>
          6명
        </PeopleRadio>
      </SelectList>
    </>
  );
};

export default StudyMaxPeopleInput;
