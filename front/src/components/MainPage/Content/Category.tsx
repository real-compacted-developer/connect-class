import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;

  padding: 65px 110px;

  display: flex;
  flex-direction: column;
`;

const Title = styled.span`
  font-family: GmarketSans;
  font-size: 20px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: left;
  color: #34363b;
`;

const Text = styled.p`
  margin-top: 20px;

  font-family: GmarketSans;
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.21;
  letter-spacing: normal;
  text-align: left;
  color: #9a9fac;
`;

const ButtonWrapper = styled.div`
  margin-top: 50px;

  .active {
    background-color: #346bff;
    color: #ffffff;
    border: solid 1.5px #346bff;
  }
`;

const Button = styled.button`
  margin-right: 30px;

  width: 87px;
  height: 33px;
  border-radius: 30px;
  border: solid 1.5px #9a9fac;
  background-color: #ffffff;

  font-family: GmarketSans;
  font-size: 13px;
  font-weight: bold;
  text-align: center;
  color: #9a9fac;

  cursor: pointer;
`;

const Category: React.FC = () => {
  return (
    <Wrapper>
      <Title>카테고리</Title>
      <Text>스터디에 참여하고 싶은 카테고리 분야를 선택하세요.</Text>

      <ButtonWrapper>
        <Button className={"active"}>전체</Button>
        <Button>IT분야</Button>
        <Button>취업분야</Button>
        <Button>공무원분야</Button>
      </ButtonWrapper>
    </Wrapper>
  );
};

export default Category;
