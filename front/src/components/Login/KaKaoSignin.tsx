import React from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import styled from "styled-components";
// import dotenv from 'dotenv';
import KakaoLogin from 'react-kakao-login';
// dotenv.config();

const ButtonWrapper = styled.div`
  width: 548px;
  height: 61px;
  border-radius: 35px;
  background-color: #ffe600;
  color: #ffffff;
  border: none;
  outline: none;

  transition: all ease 0.5s;

  &:hover{
    background-color: #bdab00;
  }
`

export const KaKaoSignin = () => {
  const history = useHistory();
  const responseKaKao = async (res: any) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const data: Object = {
      provider: 'kakao',
      id: res.profile.id.toString(),
      nickname: res.profile.kakao_account.profile.nickname,
      email: res.profile.kakao_account.email,
      profileImage: res.profile.kakao_account.profile.thumbnail_image_url,
      isPremium: false,
    };
    const userId = 'kakao' + res.profile.id;
    const user = await axios.get(`${process.env.REACT_APP_DB_LAYER}/user/${userId}`);
    const isUser: string = JSON.stringify(user.data.success);
    if (isUser === 'true') {
      const token = await axios.post(
        `${process.env.REACT_APP_AUTH_LAYER}/token`,
        JSON.stringify(user.data.data),
        config
      );
      localStorage.setItem('token', token.data.token);
      if (localStorage.token) {
        history.goBack();
      }
    } else {
      try {
        const body = JSON.stringify(data);
        const res = await axios.post(`${process.env.REACT_APP_DB_LAYER}/user`, body, config);
        const msg: string = JSON.stringify(res.data.success);
        if (msg === 'true') {
          const token = await axios.post(`${process.env.REACT_APP_DB_LAYER}/token`, body, config);
          localStorage.setItem('token', token.data.token);
          history.goBack();
        } else {
        }
      } catch (err) {
        alert(err);
      }
    }
  };
  const responseFail = (err: any) => {
    alert(err);
  };
  // Redirect if logged in

  return (
    <ButtonWrapper>
      <KakaoLogin
        token={process.env.REACT_APP_KAKAO_KEY!}
        onSuccess={responseKaKao}
        onFail={responseFail}
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: 'transparent',
          fontFamily: 'GmarketSans',
          fontSize: '18px',
          fontWeight: 'bold',
          fontStretch: 'normal',
          fontStyle: 'normal',
          lineHeight: 1.67,
          letterSpacing: 'normal',
          textAlign: 'center',
          border: 'none',
          outline: 'none'
        }}
      >
        카카오로 시작하기
    </KakaoLogin>
    </ButtonWrapper>
  );
};
