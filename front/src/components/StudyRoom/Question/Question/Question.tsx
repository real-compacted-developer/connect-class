import React from "react";
import styled from "styled-components";

import UserProfile from "./UserProfile";
import Content from "./Content";

const Wrapper = styled.li`
  width: calc(100% - 20px);
  padding: 10px;
  display: flex;
`;

interface IProps {
  userInfo: {
    userName: string;
    profileImageURL: string;
  };
  slideInfo: {
    page: number;
    imageURL: string;
  };
  content: string;
}

const Question = (props: IProps): JSX.Element => {
  return (
    <Wrapper>
      <UserProfile userInfo={props.userInfo} />
      <Content content={props.content} slideInfo={props.slideInfo} />
    </Wrapper>
  );
};

export default Question;
