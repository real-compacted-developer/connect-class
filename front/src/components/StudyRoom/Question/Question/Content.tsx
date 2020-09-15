import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 80%;
  padding: 20px;
  height: 210px;
  background-color: #f0f1f4;
  border-radius: 20px;
`;

interface IProps {
  slideInfo: {
    page: number;
    imageURL: string;
  };
  content: string;
}

export default (props: IProps): JSX.Element => {
  return <Wrapper>{props.content}</Wrapper>;
};
