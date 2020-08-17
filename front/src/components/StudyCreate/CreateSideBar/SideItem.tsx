import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const Icon = styled.div<{ icon: string }>`
  background-image: url("${(props) => props.icon}");
  width: 29px;
  height: 29px;
  margin-left: 52px;
  margin-right: 20px;
  margin-bottom: 10px;
  align-self: center;
`;

const MenuText = styled.p`
  font-family: "Gmarket Sans";
  font-size: 20px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: left;
  color: #737783;
`;

type Props = {
  icon: string;
};

export default class SideItem extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <Wrapper>
        <Icon icon={this.props.icon} />
        <MenuText>{this.props.children}</MenuText>
      </Wrapper>
    );
  }
}
