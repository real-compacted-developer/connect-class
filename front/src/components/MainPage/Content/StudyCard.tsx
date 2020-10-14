import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: 0px 20px 20px 0;
  width: 335px;
  height: 331px;

  display: flex;
  flex-direction: column;
  background-color: red;
`;

const Image = styled.div`
  width: 335px;
  height: 223px;
`;

const Title = styled.span`
  width: 149px;
  height: 18px;
  font-family: GmarketSans;
  font-size: 18px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.22;
  letter-spacing: normal;
  text-align: left;
  color: #34363b;
`;

const StudyCard: React.FC = () => {
  return (
    <Wrapper>
      <Image />
      <Title>더미데이터</Title>
    </Wrapper>
  );
};

export default StudyCard;
