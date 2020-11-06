import React from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import dotenv from 'dotenv';
import KakaoLogin from 'react-kakao-login';
dotenv.config();

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
		const user = await axios.get(`http://db.api.connectclass.io/user/${userId}`);
		const isUser: string = JSON.stringify(user.data.success);
		if (isUser === 'true') {
			const token = await axios.post('http://localhost:5500/token', JSON.stringify(user.data.data), config);
			localStorage.setItem('token', token.data.token);
			if (localStorage.token) {
				history.goBack();
			}
		} else {
			try {
				const body = JSON.stringify(data);
				const res = await axios.post('http://db.api.connectclass.io/user', body, config);
				const msg: string = JSON.stringify(res.data.success);
				if (msg === 'true') {
					const token = await axios.post('http://localhost:5500/token', body, config);
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
		<KakaoLogin
			token={process.env.REACT_APP_KAKAO_KEY!}
			onSuccess={responseKaKao}
			onFail={responseFail}
			style={{
				width: '295px',
				height: '61px',
				borderRadius: '35px',
				backgroundColor: '#ffe600',
				fontFamily: 'GmarketSans',
				fontSize: '18px',
				fontWeight: 'bold',
				fontStretch: 'normal',
				fontStyle: 'normal',
				lineHeight: 1.67,
				letterSpacing: 'normal',
				textAlign: 'center',
			}}
		>
			카카오로 시작하기
		</KakaoLogin>
	);
};
