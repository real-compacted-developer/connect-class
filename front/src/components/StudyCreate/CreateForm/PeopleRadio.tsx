import React from "react";
import styled from "styled-components";

const SelectWrapper = styled.div`
  position: relative;
  width: 139px;
  height: 64px;

  margin-right: 20px;

  @media screen and (max-width: 1000px) {
    width: 80px;
    height: 64px;
  }
`;

const Select = styled.input<{ text?: string }>`
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

  font-family: "Gmarket Sans";
  font-size: 16px;
  font-weight: 500;
  color: #9a9fac;

  &:after {
    content: "${(props) => props.text}";
  }

  &:checked {
    box-shadow: 0 5px 10px 0 rgba(52, 107, 255, 0.2);
    color: #346bff;
  }

  @media screen and (max-width: 1000px) {
    width: 80px;
    height: 64px;
  }
`;

type Props = {
  value: string;
  onChange: any;
  text?: string;
};

const PeopleRadio: React.FC<Props> = ({ value, onChange, text }) => {
  return (
    <SelectWrapper>
      <Select
        type="radio"
        name="button"
        value={value}
        onChange={onChange}
        text={text}
      />
    </SelectWrapper>
  );
};

export default PeopleRadio;
