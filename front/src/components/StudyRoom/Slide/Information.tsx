import Axios from "axios";
import React, { useEffect, useState } from "react";
import { useRouteMatch } from "react-router";
import styled from "styled-components";
import useSocket from "../../../hooks/useSocket";

const Wrapper = styled.div`
  width: 100%;
  height: 60px;

  position: absolute;
  left: 52px;
  bottom: 50px;

  z-index: 1000;
`;

const Title = styled.p`
  height: 30px;
  font-family: "Gmarket Sans";
  font-size: 30px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: left;
  color: #ffffff;

  margin: 0;
`;

const SubInformation = styled.p`
  width: 100%;
  height: 18px;
  font-family: "Gmarket Sans";
  font-size: 18px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.22;
  letter-spacing: normal;
  text-align: left;
  color: #ffffff;

  margin: 0;
`;

const FooterWrapper = styled.div`
  margin-top: 24px;
  width: 100%;
  height: 20px;

  display: flex;
`;

const Icon = styled.div`
  width: 58px;
  height: 20px;

  background-image: url("https://cdn.zeplin.io/5f2aa3244602602fbd41641d/assets/D5C47D8D-E9A0-4B15-8348-2FC2A2CB32EA.svg");
  background-repeat: no-repeat;
  background-size: 58px 20px;

  margin-right: 20px;
`;

const Information: React.FC = () => {
  const [title, setTitle] = useState<string>("커넥트클래스 | 불러오는 중...");
  const [people, setPeople] = useState<number>(0);
  const match = useRouteMatch<{ id: string }>();
  const { study } = useSocket();

  useEffect(() => {
    Axios.get(
      `${process.env.REACT_APP_STUDY_LAYER!}/group/info/${match.params.id}`
    ).then((res) => {
      setTitle(res.data.data.title);
    });

    study.on("getPeople", (data: any) => {
      console.log(data);
      setPeople(data);
    });
  }, [match, study]);

  return (
    <Wrapper>
      <Title>{title}</Title>
      <FooterWrapper>
        <Icon></Icon>
        <SubInformation>{people}명 참여중</SubInformation>
      </FooterWrapper>
    </Wrapper>
  );
};

export default Information;
