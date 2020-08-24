import React, { Component } from 'react';
import styled from 'styled-components';

import Header from './Slide/Header';
import Menu from './Slide/Menu';
import Content from './Slide/Content';

const Wrapper = styled.div`
	width: 1453px;
	height: 100vh;

	position: relative;

	background-color: #000;
`;

type Props = {};

type States = {};

export default class SlideView extends Component<Props, States> {
	render() {
		return (
			<Wrapper>
				<Header></Header>
				<Content></Content>
				<Menu></Menu>
			</Wrapper>
		);
	}
}
