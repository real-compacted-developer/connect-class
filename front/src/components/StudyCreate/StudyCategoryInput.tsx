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

const CircleList = styled.div`
  margin-top: 47px;

  display: flex;
  flex-direction: row;
`;

const Circle = styled.div`
  width: 140px;
  height: 140px;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  border-radius: 100px;
  margin-right: 53px;

  display: flex;
  justify-content: center;
  align-items: center;

  color: #9a9fac;
  font-size: 16px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.19;
  letter-spacing: normal;
  text-align: center;

  & > div {
    margin-top: 24px;
  }
`;

export default class StudyCategoryInput extends React.Component {
  render() {
    return (
      <>
        <InputTitle>카테고리 선택</InputTitle>
        <InputSubTitle>개설할 스터디 카테고리를 선택해주세요.</InputSubTitle>

        <CircleList>
          <Circle>
            <div>
              <img
                src="https://cdn.zeplin.io/5f2aa3244602602fbd41641d/assets/F5014331-BA62-4878-93B9-DB6D60ED1413.svg"
                alt="IT 분야"
                width="68"
                height="52"
              ></img>
              <p>IT 분야</p>
            </div>
          </Circle>
          <Circle></Circle>
          <Circle></Circle>
          <Circle></Circle>
        </CircleList>
      </>
    );
  }
}
