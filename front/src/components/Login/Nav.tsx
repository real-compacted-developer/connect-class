import React, { useEffect } from 'react';
import axios from 'axios';
import dotenv from 'dotenv';
import NaverButton from './Buttons/NaverButton';

dotenv.config();

declare global {
	interface Window {
		naver: any;
	}
}

const { naver } = window;

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
				},
			};
			const token = await axios.get(`${process.env.REACT_APP_AUTH_LAYER}/login/callback`, config);
			localStorage.setItem('token', token.data.token);
		}
	}

	return <NaverButton id='naverIdLogin'>네이버로 시작하기</NaverButton>;
};
