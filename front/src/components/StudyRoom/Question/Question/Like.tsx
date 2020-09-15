import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div``;

interface IProps {
  count: number;
}

export default (props: IProps): JSX.Element => {
  const [likeCount, setLikeCount] = useState(props.count);

  return <Wrapper>{likeCount}</Wrapper>;
};
