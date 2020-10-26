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

const ImageSection = styled.div`
  width: 100%;
  height: 160px;

  margin: 10px 0;
`;

const LikeSection = styled.div``;

interface IProps {
  slideInfo: {
    page: number;
    imageURL: string;
  };
  content: string;
}

export default (props: IProps): JSX.Element => {
  return (
    <Wrapper>
      <TextSection>{props.content}</TextSection>
      <ImageSection>
        <LazyImage
          width={"100%"}
          height={"100%"}
          imageURL={props.slideInfo.imageURL}
        />
      </ImageSection>
      <Like count={0} />
    </Wrapper>
  );
};
