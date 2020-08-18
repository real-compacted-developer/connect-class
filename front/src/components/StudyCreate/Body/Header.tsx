import React from "react";
import styled from "styled-components";

const HeaderStyle = styled.nav`
  width: 1609px;
  height: 60px;
  box-shadow: 0 3px 15px 0 rgba(0, 0, 0, 0.06);
  background-color: #ffffff;

  display: flex;
  flex-direction: row-reverse;
  align-items: center;
`;

const BarButton = styled.button`
  border: none;
  width: 29px;
  height: 29px;
  background-color: transparent;
  background-image: url("https://cdn.zeplin.io/5f2aa3244602602fbd41641d/assets/8A1B6F6C-32D3-4A04-A0BF-31585ADFBEFE.svg");

  margin-right: 52px;
`;

export default class Header extends React.Component {
  render() {
    return (
      <HeaderStyle>
        <BarButton />
      </HeaderStyle>
    );
  }
}
