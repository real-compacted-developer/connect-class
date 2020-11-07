import React from "react";
import styled from "styled-components";

import LazyImage from "../../../common/LazyImage";
import Like from "./Like";

const Wrapper = styled.div`
  width: 80%;
  padding: 20px;
  background-color: #f0f1f4;
  border-radius: 20px;
`;

const TextSection = styled.div`
  width: 100%;
  margin-bottom: 10px;
`;

interface IProps {
  slideInfo: {
    page: number;
    imageURL: string;
  };
  content: string;
}

const Content = (props: IProps): JSX.Element => {
  return (
    <Wrapper>
      <TextSection>{props.content}</TextSection>
    </Wrapper>
  );
};

export default Content;
