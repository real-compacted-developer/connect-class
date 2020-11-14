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

const StudyCategoryInput: React.FC<Props> = ({ onChange }) => {
  return (
    <>
      <InputTitle>카테고리 선택</InputTitle>
      <InputSubTitle>개설할 스터디 카테고리를 선택해주세요.</InputSubTitle>

      <PCWrapper>
        <CircleList>
          <CategoryCircle value="IT" onChange={onChange} />
          <CategoryCircle value="취업" onChange={onChange} />
          <CategoryCircle value="공무원" onChange={onChange} />
          <CategoryCircle value="독서논술" onChange={onChange} />
        </CircleList>
      </PCWrapper>

      <MobileWrapper>
        <CircleList>
          <CategoryCircle value="IT" onChange={onChange} />
          <CategoryCircle value="취업" onChange={onChange} />
        </CircleList>
        <CircleList>
          <CategoryCircle value="공무원" onChange={onChange} />
          <CategoryCircle value="독서논술" onChange={onChange} />
        </CircleList>
      </MobileWrapper>
    </>
  );
};

export default StudyCategoryInput;
