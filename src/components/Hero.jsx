import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';
import Lottie from 'lottie-web';

import animationData from '../../src/media/141273-web-dev.json';

const Section = styled.div`
	height: 100vh;
	scroll-snap-align: center;
	flex-direction: column;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;
const Container = styled.div`
	height: 100vh;
	width: 1400px;
	display: flex;
	justify-content: space-between;
`;
const LeftContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 20px;
	flex: 2;
	margin-left: 40px;
`;
const RightContainer = styled.div`
	position: relative;
	flex: 3;
	z-index: 1;
`;
const Title = styled.h1`
	font-family: 'Major Mono Display', monospace;
	font-size: 65px;
	color: #000;
	text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
const Description = styled.p`
	font-size: 22px;
	color: black;
`;
const LottieRightHero = styled.div`
	width: 600px;
	height: 600px;
	object-fit: contain;
	position: absolute;
	top: 170px;
	right: 0px;
	margin: auto;
	animation: animate 2s infinite ease-in-out alternate;
	@keyframes animate {
		100% {
			transform: translateY(-20px);
		}
	}
`;
function Hero() {
	const animationRef = useRef(null);
	useEffect(() => {
		if (animationRef.current) {
			Lottie.loadAnimation({
				container: animationRef.current,
				renderer: 'svg',
				loop: false,
				autoplay: true,
				animationData: animationData,
			});
		}
	}, [animationData]);
	return (
		<Section>
			<Navbar />
			<Container>
				<LeftContainer>
					<Title>
						Hi,
						<br />
						I'm Radwan
						<br />A Full Stack Web Developer
					</Title>
					<Description>
						A Full Stack Web Developer with a passion for
						<br />
						creating beautiful and modern websites.
					</Description>
				</LeftContainer>
				<RightContainer>
					{/* <Img
						src='../../media/moon.png'
						alt='hero'
					/> */}
					<LottieRightHero
						className='lottie'
						ref={animationRef}
					></LottieRightHero>
				</RightContainer>
			</Container>
		</Section>
	);
}

export default Hero;
