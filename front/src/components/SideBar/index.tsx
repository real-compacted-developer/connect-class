import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Menu from "./Menu";

const Wrapper = styled.div`
  margin-top: 52px;
  width: 311px;
  height: 100vh;

  display: flex;
  flex-direction: column;

  padding: 60px 52px;

  background-color: #f0f1f4;
  display: flex;
`;

const BlankLine = styled.div`
  margin-bottom: 20px;
`;

const MenuLink = styled(Link)`
  text-decoration: none;
`;

const SideBar: React.FC = () => {
  return (
    <Wrapper>
      <MenuLink to="/">
        <Menu
          iconURL={
            "https://cdn.zeplin.io/5f2aa3244602602fbd41641d/assets/95034713-07B3-4E3D-9CE0-5F9B1E19EF96.svg"
          }
          text={"홈"}
        />
      </MenuLink>
      <MenuLink to="/study/create">
        <Menu
          iconURL={
            "https://cdn.zeplin.io/5f2aa3244602602fbd41641d/assets/D3D6AF74-9D3C-49E8-A9B9-05F709FAE20F.svg"
          }
          text={"스터디 개설하기"}
        />
      </MenuLink>
      <BlankLine />
      <Menu
        iconURL={
          "https://cdn.zeplin.io/5f2aa3244602602fbd41641d/assets/6F141232-F4AF-4A24-8FA8-200EF98B0772.svg"
        }
        text={"나의 프로필"}
      />
      <Menu
        iconURL={
          "https://cdn.zeplin.io/5f2aa3244602602fbd41641d/assets/9EB9FEE2-F063-4035-8AA6-884754280148.svg"
        }
        text={"스터디 자료방"}
      />
      <BlankLine />
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
