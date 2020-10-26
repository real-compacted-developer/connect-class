import React from "react";
import styled from "styled-components";

const Wrapper = styled.div``;

interface IProps {
  count: number;
}

const Like = (props: IProps): JSX.Element => {
  return <Wrapper>{props.count}</Wrapper>;
};

export default Like;
