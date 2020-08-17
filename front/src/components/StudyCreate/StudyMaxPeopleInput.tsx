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
  margin-bottom: 0;
`;

const InputSubTitle = styled.p`
  font-family: "Spoqa Han Sans";
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.17;
  letter-spacing: normal;
  text-align: left;
  color: #9a9fac;
  margin-top: 4px;
`;

const SelectList = styled.div`
  margin-top: 47px;

  display: flex;
  flex-direction: row;
`;

const Select = styled.button`
  width: 139px;
  height: 64px;
  border-radius: 32px;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.08);
  background-color: #ffffff;

  font-family: GmarketSans;
  font-size: 18px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.22;
  letter-spacing: normal;
  color: #9a9fac;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-right: 68px;
  border: none;
  cursor: pointer;
`;

export default class StudyMaxPeopleInput extends React.Component {
  render() {
    return (
      <>
        <InputTitle>최대인원 설정</InputTitle>
        <InputSubTitle>원하시는 스터디 최대인원을 설정해주세요.</InputSubTitle>

        <SelectList>
          <Select>2명</Select>
          <Select>3명</Select>
          <Select>4명</Select>
          <Select>5명</Select>
          <Select>6명</Select>
        </SelectList>
      </>
    );
  }
}
