import React from "react";
import styled from "styled-components";

const SelectWrapper = styled.div`
  position: relative;
  width: 139px;
  height: 64px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-family: "Gmarket Sans";
  font-size: 16px;
  font-weight: 500;
  color: #9a9fac;

  margin-right: 68px;

  &:hover {
    color: #346bff;
  }
`;

const Select = styled.input`
  position: absolute;
  appearance: none;

  width: 139px;
  height: 64px;
  border-radius: 32px;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.08);
  background-color: #ffffff;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-right: 68px;
  border: none;
  cursor: pointer;

  &:checked {
    box-shadow: 0 5px 10px 0 rgba(52, 107, 255, 0.2);
  }
`;

const SelectText = styled.div`
  position: absolute;

  z-index: 1;
  margin-left: 6px;
  margin-top: 3px;
`;

type Props = {
  value: string;
  onChange: any;
};

export default class PeopleRadio extends React.Component<Props> {
  render() {
    return (
      <SelectWrapper>
        <SelectText>{this.props.children}</SelectText>
        <Select
          type="radio"
          name="button"
          value={this.props.value}
          onChange={this.props.onChange}
        />
      </SelectWrapper>
    );
  }
}
