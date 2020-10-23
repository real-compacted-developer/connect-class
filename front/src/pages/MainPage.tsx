import React, { useEffect } from "react";
import styled from "styled-components";
import Header from "../components/MainPage/Header";
import Body from "../components/MainPage/Body";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserAsync } from "../modules/user";
import { RootState } from "../modules";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
`;

const MainPage: React.FC = () => {
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserAsync());
  }, [dispatch]);

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <Wrapper>
      <Header />
      <Body />
    </Wrapper>
  );
};

export default MainPage;
