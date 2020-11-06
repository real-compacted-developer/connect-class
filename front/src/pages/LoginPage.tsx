import React from 'react';
import { Redirect } from 'react-router-dom';
import dotenv from 'dotenv';
import { KaKaoSignin } from '../components/Login/KaKaoSignin';
import { GoogleSignin } from '../components/Login/GoogleSignin';
import { Nav } from '../components/Login/Nav';
import styled from 'styled-components';

dotenv.config();
const Wrapper = styled.div`
	width: 100vw;
	height: 100vh;
`;
const LoginPage: React.FC = () => {
	// Redirect if logged in
	if (localStorage.getItem('token')) {
		return <Redirect to='/' />;
	}
	return (
		<Wrapper>
			<h1>Login Page</h1>
			<KaKaoSignin />
			<br></br>
			<GoogleSignin />
			<br></br>
			<Nav />
		</Wrapper>
	);
};

export default LoginPage;
