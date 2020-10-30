import React, { useEffect, useState, Fragment } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import styled, { css } from 'styled-components';
import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

declare global {
  interface Window {
    naver: any;
  }
}

const { naver } = window;

interface User {
  nickname: string;
  image: string;
}

export const Nav = () => {

  useEffect(CDM, []);

  function CDM() {
    Naver();
    GetProfile();
  }
  function Naver() {
    //리팩토링 예정
    const naverLogin = new naver.LoginWithNaverId({
      clientId: process.env.REACT_APP_NAVER_APP_KEY,
      callbackUrl: 'http://127.0.0.1:3000/login/',
      callbackHandle: true,
      loginButton: {
        color: 'green',
        type: 1,
        height: 20,
      } /* 로그인 버튼의 타입을 지정 */,
    });

    naverLogin.init();
  }

  function GetProfile() {
    window.location.href.includes('access_token') && GetUser();

    async function GetUser() {
      const location = window.location.href.split('=')[1];
      const loca = location.split('&')[0];
      let config = {
        headers: {
          Authorization: loca,
        }
      }
      const token = await axios.get('http://localhost:5500/login/callback', config);
      localStorage.setItem('token', token.data.token);
    }
  }

  return (
    <Fragment>
        <Fragment>
        <NaverLogin id="naverIdLogin"></NaverLogin>
        </Fragment>

    </Fragment>
  );
};

const pseudoBefore = css`
  content: '';
  display: inline-block;
`;

const NaverLogin = styled.div`
  width: 30px;
  height: 30px;
  vertical-align: middle;
  margin-right: 10px;
`;