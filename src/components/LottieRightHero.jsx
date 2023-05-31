import React, { useEffect, useRef } from 'react';
import Lottie from 'lottie-web';
import styled from 'styled-components';
import animationData from '/src/media/141273-web-dev.json';

const LottieAnimation = styled.div`
	width: 600px;
	height: 500px;
	object-fit: contain;
	position: absolute;
	top: 250px;
	right: 110px;
	margin: auto;
	animation: animate 2s infinite ease-in-out alternate;
	@keyframes animate {
		100% {
			transform: translateY(-20px);
		}
	}
`;

const LottieRightHero = () => {
	const animationRef = useRef(null);

	useEffect(() => {
		if (animationRef.current) {
			setTimeout(() => {
				Lottie.loadAnimation({
					container: animationRef.current,
					renderer: 'svg',
					loop: false,
					autoplay: true,
					animationData,
				});
			}, 2500);
		}
	}, [animationData]);

	return (
		<LottieAnimation
			className='lottie'
			ref={animationRef}
		></LottieAnimation>
	);
};

export default LottieRightHero;
