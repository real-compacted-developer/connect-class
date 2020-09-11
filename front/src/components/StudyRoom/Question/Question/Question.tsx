import React from "react";
import styled from "styled-components";

const Wrapper = styled.li`
  width: calc(100% - 20px);
  padding: 10px;
  display: flex;
`;

const Content = styled.div`
  width: 80%;
  height: 257px;
  background-color: #f0f1f4;
  border-radius: 20px;
`;

const User = styled.div`
  height: calc(inherit - 20px);
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding: 10px 0 10px 0;
`;

const Icon = styled.div<{ imageURL: string }>`
  width: 35px;
  height: 35px;

  background-color: blue;
  background-image: url(${(props): string => props.imageURL});
  background-size: 35px 35px;
  border-radius: 35px;
  object-fit: contain;
`;

const Name = styled.p`
  height: 12px;
  font-family: "Gmarket Sans";
  font-size: 12px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.08;
  letter-spacing: normal;
  text-align: left;
  color: #000000;

  margin: 0;
  padding: 0;
`;

type Props = {
  userInfo: {
    userName: string;
    profileImageURL: string;
  };
  content: string;
};

type States = {};

export default (props: Props): JSX.Element => {
  return (
    <Wrapper>
      <User>
        <Icon imageURL={props.userInfo.profileImageURL} />
        <Name>{props.userInfo.userName}</Name>
      </User>
      <Content>{props.content}</Content>
    </Wrapper>
  );
};
