import React from "react";
import styled from "styled-components";

const CircleWrapper = styled.div`
  position: relative;
  width: 140px;
  height: 140px;

  margin-right: 30px;

  &:hover {
    color: #346bff;
  }

  @media screen and (max-width: 1000px) {
    width: 100px;
    height: 100px;
  }
`;

const Circle = styled.input<{ text: string }>`
  position: absolute;
  appearance: none;

  width: 140px;
  height: 140px;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  margin-right: 53px;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  font-family: "Gmarket Sans";
  color: #9a9fac;
  font-size: 16px;
  font-weight: bold;
  text-align: center;

  &:after {
    content: "${(props) => props.text}";
  }

  &:checked {
    box-shadow: 0 5px 10px 0 rgba(52, 107, 255, 0.2);
    color: #346bff;
  }

  @media screen and (max-width: 1000px) {
    width: 100px;
    height: 100px;
  }
`;

type Props = {
  value: string;
  onChange?: any;
};

const CategoryCircle: React.FC<Props> = ({ value, onChange }) => {
  return (
    <CircleWrapper>
      <Circle
        type="radio"
        text={value}
        name="category"
        value={value}
        onChange={onChange}
      />
    </CircleWrapper>
  );
};

export default CategoryCircle;
