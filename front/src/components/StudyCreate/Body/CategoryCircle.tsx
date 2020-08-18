import React from "react";
import styled from "styled-components";

const CircleWrapper = styled.div`
  position: relative;
  width: 140px;
  height: 140px;

  display: flex;
  justify-content: center;
  align-items: center;

  color: #9a9fac;
  font-size: 16px;
  font-weight: bold;
  text-align: center;

  margin-right: 53px;

  &:hover {
    color: #346bff;
  }
`;

const CircleContent = styled.div`
  position: absolute;

  margin-top: 14px;
  margin-left: 4px;
`;

const Circle = styled.input`
  position: absolute;
  appearance: none;

  width: 140px;
  height: 140px;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  margin-right: 53px;

  cursor: pointer;

  &:checked {
    box-shadow: 0 5px 10px 0 rgba(52, 107, 255, 0.2);
  }
`;

type Props = {
  icon: string;
  value: string;
};

export default class CategoryCircle extends React.Component<Props> {
  render() {
    return (
      <CircleWrapper>
        <CircleContent>
          <img src={this.props.icon} alt={this.props.value}></img>
          <p>{this.props.children}</p>
        </CircleContent>
        <Circle
          className="Circle__body"
          type="radio"
          name="category"
          value={this.props.value}
        />
      </CircleWrapper>
    );
  }
}
