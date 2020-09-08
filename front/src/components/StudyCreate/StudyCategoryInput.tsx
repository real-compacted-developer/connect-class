import React from "react";
import styled from "styled-components";
import CategoryCircle from "./CreateForm/CategoryCircle";

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

const CircleList = styled.div`
  margin-top: 47px;

  display: flex;
  flex-direction: row;
`;

type Props = {
  onChange: any;
};

const StudyCategoryInput: React.FC<Props> = ({ onChange }) => {
  return (
    <>
      <InputTitle>카테고리 선택</InputTitle>
      <InputSubTitle>개설할 스터디 카테고리를 선택해주세요.</InputSubTitle>

      <CircleList>
        <CategoryCircle
          icon="https://cdn.zeplin.io/5f2aa3244602602fbd41641d/assets/F5014331-BA62-4878-93B9-DB6D60ED1413.svg"
          value="IT분야"
          onChange={onChange}
        >
          IT 분야
        </CategoryCircle>

        <CategoryCircle icon="" value="" onChange={onChange}></CategoryCircle>
        <CategoryCircle icon="" value="" onChange={onChange}></CategoryCircle>
        <CategoryCircle icon="" value="" onChange={onChange}></CategoryCircle>
      </CircleList>
    </>
  );
};

export default StudyCategoryInput;
