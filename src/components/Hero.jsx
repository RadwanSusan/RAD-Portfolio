import React, { Suspense, useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import Lottie from 'lottie-web';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
import Navbar from './Navbar';
import animationData from '../media/141273-web-dev.json';
import { lightTheme, darkTheme, useDarkMode } from '../contexts/theme-context';

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

const showTopText = keyframes`
  0% {
    transform: translate3d(0, 100%, 0);
  }

  40%,
  60% {
    transform: translate3d(0, 50%, 0);
  }

  100% {
    transform: translate3d(0, 0, 0);
  }
`;

const showBottomText = keyframes`
  0% {
    transform: translate3d(0, -100%, 0);
  }

  100% {
    transform: translate3d(0, 0, 0);
  }
`;

const AnimatedTitle = styled.div`
	color: #000;
	font-family: 'Nunito', sans-serif;
	height: 30vmin;
	width: 1vmin;

	> div {
		height: 50%;
		overflow: hidden;
		position: absolute;
		width: 100%;
	}

	> div > div {
		font-size: 5.5vmin;
		padding: 2vmin 0;
		position: absolute;
	}

	> div > div span {
		display: block;
		font-family: 'Nunito', sans-serif;
		font-weight: bolder;
		text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	}

	> div.text-top {
		top: 0;

		> div {
			animation: ${showTopText} 1s;
			animation-delay: 0.5s;
			animation-fill-mode: forwards;
			bottom: 0;
			transform: translate(0, 100%);
		}
	}

	> div.text-bottom {
		bottom: 0;

		> div {
			animation: ${showBottomText} 0.5s;
			animation-delay: 1.75s;
			animation-fill-mode: forwards;
			top: 0;
			transform: translate(0, -100%);
		}
	}
`;

const BottomDesc = styled.div`
	font-size: 2.3vmin !important;
`;

function Hero() {
	const { isDark } = useDarkMode();
	const animationRef = useRef(null);

	useEffect(() => {
		const textTopBorder = document.querySelector('div.text-top');
		isDark
			? (textTopBorder.style.borderBottom = darkTheme.colors.textTopBorder)
			: (textTopBorder.style.borderBottom = lightTheme.colors.textTopBorder);
	}, [isDark]);

	useEffect(() => {
		setTimeout(() => {
			if (animationRef.current) {
				Lottie.loadAnimation({
					container: animationRef.current,
					renderer: 'svg',
					loop: false,
					autoplay: true,
					animationData,
				});
			}
		}, 2500);
	}, [animationData]);

	return (
		<Section>
			<Navbar />
			<Container>
				<LeftContainer>
					<AnimatedTitle>
						<div
							className='text-top'
							style={{
								color: isDark
									? darkTheme.colors.TitleAndDesc
									: lightTheme.colors.TitleAndDesc,
							}}
						>
							<div>
								<span>Hi,</span>
								<span>I'm Radwan</span>
								<span>A Full Stack Web Developer</span>
							</div>
						</div>
						<div
							className='text-bottom'
							style={{
								color: isDark
									? darkTheme.colors.TitleAndDesc
									: lightTheme.colors.TitleAndDesc,
							}}
						>
							<BottomDesc>
								A Full Stack Web Developer with a passion for creating
								beautiful and modern websites.
							</BottomDesc>
						</div>
					</AnimatedTitle>
				</LeftContainer>
				<RightContainer>
					<Canvas style={{ background: 'transparent' }}>
						<Suspense fallback={null}>
							<OrbitControls
								enableZoom={false}
								autoRotate={true}
								enableRotate={false}
								autoRotateSpeed={3}
								rotation={[0, 0, 0]}
							/>
							<ambientLight
								intensity={0.7}
								color='hsl(0, 0%, 100%)'
								color={
									isDark
										? darkTheme.threeJS.three_Model_Hero_Ambient_Color
										: lightTheme.threeJS
												.three_Model_Hero_Ambient_Color
								}
								position={[10, 10, 10]}
							/>
							<directionalLight position={[3, 2, 1]} />
							<directionalLight position={[-3, 2, 1]} />
							<Sphere
								args={[0.9, 100, 200]}
								scale={2.3}
							>
								<MeshDistortMaterial
									color={
										isDark
											? darkTheme.threeJS.three_Model_Hero_Color
											: lightTheme.threeJS.three_Model_Hero_Color
									}
									attach='material'
									distort={0.35}
									speed={0.5}
								/>
							</Sphere>
						</Suspense>
					</Canvas>
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
