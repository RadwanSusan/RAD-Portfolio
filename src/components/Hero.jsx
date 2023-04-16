import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';
import Lottie from 'lottie-web';
import './style/hero.css';

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
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 20px;
	flex: 2;
	margin-left: 40px;
	margin-top: 150px;
`;
const RightContainer = styled.div`
	position: relative;
	flex: 3;
	z-index: 1;
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
		setTimeout(() => {
			if (animationRef.current) {
				Lottie.loadAnimation({
					container: animationRef.current,
					renderer: 'svg',
					loop: false,
					autoplay: true,
					animationData: animationData,
				});
			}
		}, 2500);
	}, [animationData]);
	return (
		<Section>
			<Navbar />
			<Container>
				<LeftContainer>
					<div class='animated-title'>
						<div class='text-top'>
							<div>
								<span>Hi,</span>
								<span>I'm Radwan</span>
								<span>A Full Stack Web Developer</span>
							</div>
						</div>
						<div className='text-bottom'>
							<div className='botomDesc'>
								A Full Stack Web Developer with a passion for creating beautiful and
								modern websites.
							</div>
						</div>
					</div>
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
