import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
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

interface IProps {
  userInfo: {
    userName: string;
    profileImageURL: string;
  };
}

export default (props: IProps): JSX.Element => {
  return (
    <Wrapper>
      <Icon imageURL={props.userInfo.profileImageURL} />
      <Name>{props.userInfo.userName}</Name>
    </Wrapper>
  );
};
