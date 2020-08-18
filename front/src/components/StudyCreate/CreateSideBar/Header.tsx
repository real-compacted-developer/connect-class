import React from "react";
import styled from "styled-components";

import { ReactComponent as Logo } from "../../../assets/ic_logo_tabbar.svg";

const Wrapper = styled.nav`
  width: 311px;
  height: 60px;
  box-shadow: 0 3px 15px 0 rgba(0, 0, 0, 0.06);
  background-color: #346bff;

  display: flex;
  align-items: center;
`;

const LogoStyle = styled(Logo)`
  margin-left: 52px;
`;

export default class Header extends React.Component {
  render() {
    return (
      <Wrapper>
        <LogoStyle />
      </Wrapper>
    );
  }
}
