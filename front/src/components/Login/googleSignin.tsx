import React, { Fragment } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import GoogleLogin from 'react-google-login';
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

export const GoogleSignin = () => {
  const history = useHistory();
	const responseGoogle = async (res: any) => {
		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};
		const data: Object = {
			provider: 'google',
			id: res.profileObj.googleId,
			nickname: res.profileObj.name,
			email: res.profileObj.email,
			profileImage: res.profileObj.imageUrl,
			isPremium: false,
		};
		const userId = 'google' + res.profileObj.googleId;
		const user = await axios.get(`http://db.api.connectclass.io/user/${userId}`);
		const isUser: string = JSON.stringify(user.data.success);
		if (isUser === 'true') {
			const token = await axios.post('http://localhost:5500/token', JSON.stringify(user.data.data), config);
      localStorage.setItem('token', token.data.token);
      history.goBack();
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
					alert('DB 오류입니다.');
				}
			} catch (err) {
				alert(err);
			}
		}
	};
	if (localStorage.token) {
		return <Redirect to='/' />;
	}
	return (
		<Fragment>
			<GoogleLogin
				clientId={process.env.REACT_APP_GOOGLE_KEY!}
				buttonText='구글 계정으로 로그인'
				onSuccess={responseGoogle}
				onFailure={(result : any) => console.log(result)}
			/>
		</Fragment>
	);
};
