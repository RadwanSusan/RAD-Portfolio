import React, { Suspense, useEffect, lazy } from 'react';
import styled, { keyframes } from 'styled-components';
const Navbar = lazy(() => import('./Navbar'));
const LottieRightHero = lazy(() => import('./LottieRightHero'));
const HeroRightBlob = lazy(() => import('./HeroRightBlob'));
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
const HomePage = () => {
	const { isDark } = useDarkMode();

	useEffect(() => {
		const textTopBorder = document.querySelector('div.text-top');
		textTopBorder.style.borderBottom = isDark
			? darkTheme.colors.textTopBorder
			: lightTheme.colors.textTopBorder;
	}, [isDark]);

	return (
		<Section>
			<Suspense fallback={null}>
				<Navbar />
			</Suspense>
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
					<Suspense fallback={null}>
						<HeroRightBlob />
					</Suspense>
					<Suspense fallback={null}>
						<LottieRightHero />
					</Suspense>
				</RightContainer>
			</Container>
		</Section>
	);
};

export default HomePage;
