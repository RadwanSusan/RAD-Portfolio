import React from 'react';
import styled, { keyframes } from 'styled-components';
import { lightTheme, darkTheme, useDarkMode } from '../contexts/theme-context';

const Section = styled.div`
	height: 100vh;
	scroll-snap-align: center;
	display: flex;
	justify-content: center;
	position: relative;
	color: black;
	font-size: 14px;
	font-weight: 300;
`;

const Container = styled.div`
	width: 1400px;
	display: flex;
	justify-content: space-between;
	@media only screen and (max-width: 768px) {
		width: 100%;
		flex-direction: column;
	}
`;

const Left = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
	@media only screen and (max-width: 768px) {
		padding: 20px;
		justify-content: center;
	}
`;

const List = styled.ul`
	list-style: none;
	display: flex;
	flex-direction: column;
	gap: 10px;
	margin-left: 50px;
`;

const ListItem = styled.li`
	font-size: 80px;
	font-weight: bold;
	color: transparent;
	color: transparent;
	-webkit-text-stroke: 1px ${(props) => props.$WorkslistItemColorStroke};
	position: relative;

	@media only screen and (max-width: 768px) {
		font-size: 24px;
		color: white;
		-webkit-text-stroke: 0px;
	}

	::after {
		content: '${(props) => props.text}';
		position: absolute;
		top: 0;
		left: 0;
		color: white;
		width: 0px;
		overflow: hidden;
		white-space: nowrap;
	}

	&:hover {
		::after {
			animation: moveText 0.5s linear both;
			@keyframes moveText {
				to {
					width: 100%;
				}
			}
		}
	}
`;
const Right = styled.div`
	flex: 1;
`;

const Wrapper = styled.div`
	position: absolute;
	left: 60%;
	top: 34%;
`;

const Side = styled.div`
	width: 25rem;
	height: 5rem;
	position: relative;
`;

const Span = styled.span`
	display: block;
	width: 25rem;
	height: 2.5rem;
`;

const Side1 = styled(Side)`
	clip-path: polygon(5% 0%, 100% 1%, 100% 100%, 7% 100%, 0% 50%);
	transform: rotate(32deg);
	width: 22rem;
	z-index: 10;
	left: -2px;
`;

const Side2 = styled(Side)`
	clip-path: polygon(0% 0%, 95% 0%, 100% 50%, 91% 100%, 0% 100%);
	top: 5.1rem;
	left: 1.6rem;
	transform: rotate(-35deg);
	width: 22rem;
	z-index: 20;
`;

const Side3Half = styled(Side)`
	width: 13rem;
	clip-path: polygon(14% 0%, 98% 0%, 100% 50%, 98% 100%, 15% 100%);
	transform: rotate(90deg);
	left: -2.5rem;
`;

const Side31 = styled(Side3Half)`
	z-index: 5;
	top: -9rem;
`;

const Side32 = styled(Side3Half)`
	z-index: 30;
	top: -1.8rem;
	left: -2rem;
	width: 12rem;
	clip-path: polygon(0% 0%, 85% 0%, 100% 50%, 90% 100%, 0% 100%);
`;

const ballMove = keyframes`
8% {
	top: 10rem;
	left: 16.5rem;
	z-index: 30;
 }
 14% {
	top: 19.5rem;
	left: 4rem;
	z-index: 30;
 }
 15% {
	z-index: 30;
 }
 16% {
	z-index: 4;
 }
 23% {
	top: 1rem;
	left: 4rem;
	z-index: 1;
 }
 33% {
	top: 11.5rem;
	left: 20rem;
	z-index: 10;
 }
 34% {
	z-index: 50;
 }
 42% {
	top: 24rem;
	left: 3rem;
	z-index: 50;
 }
 44%, 45%, 46% {
	z-index: 31;
 }
 47% {
	z-index: 31;
 }
 48% {
	z-index: 31;
 }
 49% {
	z-index: 8;
 }
 52% {
	top: 7rem;
	left: 4rem;
	z-index: 8;
 }
 61% {
	top: 15.5rem;
	left: 17rem;
	z-index: 10;
 }
 68% {
	top: 26.5rem;
	z-index: 5;
	left: 0;
 }
 69% {
	z-index: 35;
 }
 78% {
	top: 3.5rem;
	left: 0;
	z-index: 35;
 }
 86% {
	top: 12rem;
	left: 13rem;
	z-index: 15;
 }
 93% {
	top: 23rem;
	left: -1rem;
	z-index: 2;
 }
 99% {
	z-index: 4;
 }
`;

const Ball = styled.div`
	width: 2rem;
	height: 2rem;
	background: whitesmoke;
	border-radius: 100%;
	position: absolute;
	z-index: 20;
	transform: translateY(-5.5rem) translateX(1.5rem);
	top: -0.5rem;
	left: -0.75rem;
	animation: ${ballMove} 10s infinite linear;
`;

const Works = () => {
	const { isDark } = useDarkMode();
	const sectionStyles = isDark ? darkTheme.colors : lightTheme.colors;

	const data = [
		'Web Design',
		'Development',
		'Illustration',
		'Product Design',
		'Social Media',
	];
	return (
		<Section>
			<Container id='works'>
				<Left>
					<List>
						{data.map((item) => (
							<ListItem
								key={item}
								text={item}
								$WorkslistItemColorStroke={
									sectionStyles.WorkslistItemColorStroke
								}
							>
								{item}
							</ListItem>
						))}
					</List>
				</Left>
				<Right>
					<Wrapper>
						<Ball />
						<Side1>
							<Span style={{ backgroundColor: '#ffbdb8' }} />
							<Span style={{ backgroundColor: '#163d37' }} />
						</Side1>
						<Side2>
							<Span style={{ backgroundColor: '#ffbdb8' }} />
							<Span style={{ backgroundColor: '#0156f0' }} />
						</Side2>
						<Side31>
							<Span style={{ backgroundColor: '#0156f0' }} />
							<Span style={{ backgroundColor: '#163d37' }} />
						</Side31>
						<Side32>
							<Span style={{ backgroundColor: '#0156f0' }} />
							<Span style={{ backgroundColor: '#163d37' }} />
						</Side32>
					</Wrapper>
				</Right>
			</Container>
		</Section>
	);
};

export default Works;
