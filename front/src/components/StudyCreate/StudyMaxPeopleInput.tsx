import React from "react";
import styled from "styled-components";
import PeopleRadio from "./CreateForm/PeopleRadio";

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

const PCWrapper = styled.div`
  display: block;

  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

const MobileWrapper = styled.div`
  display: none;

  @media screen and (max-width: 1000px) {
    display: flex;
    flex-direction: column;
  }
`;

type Props = {
  onChange: any;
};

const StudyMaxPeopleInput: React.FC<Props> = ({ onChange }) => {
  return (
    <>
      <InputTitle>최대인원 설정</InputTitle>
      <InputSubTitle>원하시는 스터디 최대인원을 설정해주세요.</InputSubTitle>

      <PCWrapper>
        <SelectList>
          <PeopleRadio value="2" onChange={onChange} text="2명" />
          <PeopleRadio value="3" onChange={onChange} text="3명" />
          <PeopleRadio value="4" onChange={onChange} text="4명" />
          <PeopleRadio value="5" onChange={onChange} text="5명" />
          <PeopleRadio value="6" onChange={onChange} text="6명" />
        </SelectList>
      </PCWrapper>

      <MobileWrapper>
        <SelectList>
          <PeopleRadio value="2" onChange={onChange} text="2명" />
          <PeopleRadio value="3" onChange={onChange} text="3명" />
          <PeopleRadio value="4" onChange={onChange} text="4명" />
        </SelectList>
        <SelectList>
          <PeopleRadio value="5" onChange={onChange} text="5명" />
          <PeopleRadio value="6" onChange={onChange} text="6명" />
        </SelectList>
      </MobileWrapper>
    </>
  );
};

export default StudyMaxPeopleInput;
