import React from "react";
import styled from "styled-components";
import CategoryCircle from "./Body/CategoryCircle";

const InputTitle = styled.p`
  font-family: "Gmarket Sans";
  font-size: 20px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: left;
  color: #9a9fac;
  margin-bottom: 0;
`;

const InputSubTitle = styled.p`
  font-family: "Spoqa Han Sans";
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.17;
  letter-spacing: normal;
  text-align: left;
  color: #9a9fac;
  margin-top: 4px;
`;

const CircleList = styled.div`
  margin-top: 47px;

  display: flex;
  flex-direction: row;
`;

type Props = {
  onChange: any;
};

export default class StudyCategoryInput extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <>
        <InputTitle>카테고리 선택</InputTitle>
        <InputSubTitle>개설할 스터디 카테고리를 선택해주세요.</InputSubTitle>

        <CircleList>
          <CategoryCircle
            icon="https://cdn.zeplin.io/5f2aa3244602602fbd41641d/assets/F5014331-BA62-4878-93B9-DB6D60ED1413.svg"
            value="IT분야"
            onChange={this.props.onChange}
          >
            IT 분야
          </CategoryCircle>

          <CategoryCircle
            icon=""
            value=""
            onChange={this.props.onChange}
          ></CategoryCircle>
          <CategoryCircle
            icon=""
            value=""
            onChange={this.props.onChange}
          ></CategoryCircle>
          <CategoryCircle
            icon=""
            value=""
            onChange={this.props.onChange}
          ></CategoryCircle>
        </CircleList>
      </>
    );
  }
}
