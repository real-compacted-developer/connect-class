import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 30px;
  margin: 21px 0;

  display: flex;
  flex-direction: row;

  align-items: center;

  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;

const Icon = styled.div<{ url: string }>`
  width: 30px;
  height: 30px;

  background-image: url(${(props) => props.url});
`;

const Text = styled.span`
  margin-left: 20px;

  height: 20px;
  font-family: GmarketSans;
  font-size: 20px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: left;
  color: #9a9fac;

  .active {
    color: #346bff;
  }
`;

type Props = {
  iconURL: string;
  text: string;
};

const Menu: (props: Props) => JSX.Element = (props) => {
  return (
    <Wrapper>
      <Icon url={props.iconURL} />
      <Text>{props.text}</Text>
    </Wrapper>
  );
};

export default Menu;
