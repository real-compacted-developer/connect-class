import React, { Component } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: calc(100vh - 120px - 60px);
  top: 60px;

  position: relative;
`;

const Menu = styled.div`
  width: calc(100% - 104px);
  height: 25px;

  padding: 26px 52px 29px 52px;
  display: flex;
  flex-basis: column;

  background-color: #ffffff;
`;

const Best = styled.p`
  width: 63px;
  height: 25px;
  font-family: GmarketSans;
  font-size: 25px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: left;
  color: #346bff;

  margin: 0;
  padding: 0;
`;

const Recent = styled.p`
  width: 98px;
  height: 25px;
  object-fit: contain;
  font-family: GmarketSans;
  font-size: 25px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: left;
  color: #d0d4de;

  margin: 0;
  padding: 0;
`;

const Gradation = styled.div`
  width: 100%;
  height: 80px;
  position: absolute;
  top: 80px;
  background-image: linear-gradient(to bottom, #ffffff, rgba(255, 255, 255, 0));
`;

type Props = {};

type States = {};

export default class QuestionList extends Component<Props, States> {
  constructor(props: Props) {
    super(props);
  }

  componentWillMount() {}

  componentDidMount() {}

  render() {
    return (
      <Wrapper>
        <Menu>
          <Best>Best</Best>
          <Recent>Recent</Recent>
        </Menu>
        <Gradation></Gradation>
        asdfasdf
      </Wrapper>
    );
  }
}
