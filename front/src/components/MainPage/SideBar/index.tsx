import React from "react";
import styled from "styled-components";

import Menu from "./Menu";

const Wrapper = styled.div`
  margin-top: 52px;
  width: 311px;
  height: 100%;

  display: flex;
  flex-direction: column;

  padding: 60px 52px;

  background-color: #f0f1f4;
  display: flex;
`;

const SideBar: React.FC = () => {
  return (
    <Wrapper>
      <Menu
        iconURL={
          "https://cdn.zeplin.io/5f2aa3244602602fbd41641d/assets/95034713-07B3-4E3D-9CE0-5F9B1E19EF96.svg"
        }
        text={"홈"}
      />
      <Menu
        iconURL={
          "https://cdn.zeplin.io/5f2aa3244602602fbd41641d/assets/EEB8A6DC-6554-4F80-B57F-B85A4CBC7FB3.svg"
        }
        text={"사용 가이드"}
      />
      <Menu
        iconURL={
          "https://cdn.zeplin.io/5f2aa3244602602fbd41641d/assets/DA827582-5333-4266-952A-CEF03C382544.svg"
        }
        text={"문의하기"}
      />
    </Wrapper>
  );
};

export default SideBar;
