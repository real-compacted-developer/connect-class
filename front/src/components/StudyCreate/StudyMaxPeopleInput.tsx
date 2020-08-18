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

const SelectWrapper = styled.div`
  position: relative;
  width: 139px;
  height: 64px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-family: "Gmarket Sans";
  font-size: 16px;
  font-weight: 500;
  color: #9a9fac;

  &:hover {
    color: #346bff;
  }
`;

const Select = styled.input`
  position: absolute;
  appearance: none;

  width: 139px;
  height: 64px;
  border-radius: 32px;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.08);
  background-color: #ffffff;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-right: 68px;
  border: none;
  cursor: pointer;

  &:checked {
    box-shadow: 0 5px 10px 0 rgba(52, 107, 255, 0.2);
  }
`;

const SelectText = styled.div`
  position: absolute;

  z-index: 1;
  margin-left: 6px;
  margin-top: 3px;
`;

export default class StudyMaxPeopleInput extends React.Component {
  render() {
    return (
      <>
        <InputTitle>최대인원 설정</InputTitle>
        <InputSubTitle>원하시는 스터디 최대인원을 설정해주세요.</InputSubTitle>

        <SelectList>
          <PeopleRadio value="2">2명</PeopleRadio>
          <PeopleRadio value="3">3명</PeopleRadio>
          <PeopleRadio value="4">4명</PeopleRadio>
          <PeopleRadio value="5">5명</PeopleRadio>
          <PeopleRadio value="6">6명</PeopleRadio>
        </SelectList>
      </>
    );
  }
}
