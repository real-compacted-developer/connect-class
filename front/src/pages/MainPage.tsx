import React, { useEffect } from "react";
import styled from "styled-components";
import Header from "../components/MainPage/Header";
import Body from "../components/MainPage/Body";
import { useDispatch } from "react-redux";
import { fetchUserAsync } from "../modules/user";
import useUser from "../hooks/useUser";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
`;

const MainPage: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserAsync());
  }, [dispatch]);

  return (
    <Wrapper>
      <Header />
      <Body />
    </Wrapper>
  );
};

export default MainPage;
