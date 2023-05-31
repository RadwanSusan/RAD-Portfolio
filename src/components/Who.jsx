import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { OrbitControls } from '@react-three/drei';
import { Canvas, useThree } from '@react-three/fiber';
import { lightTheme, darkTheme, useDarkMode } from '../contexts/theme-context';
import Cube from './Cube';

const Section = styled.div`
	height: 100vh;
	scroll-snap-align: center;
	display: flex;
	justify-content: center;
`;

const Container = styled.div`
	height: 100vh;
	scroll-snap-align: center;
	width: 1400px;
	display: flex;
	gap: 100px;
	justify-content: space-between;
`;

const Left = styled.div`
	flex: 1;
	@media only screen and (max-width: 768px) {
		display: none;
	}
`;

const Title = styled.h1`
	font-size: 60px;
	font-family: 'Nunito', sans-serif;
	color: ${(props) => props.$whoTitleColor};
	text-decoration: underline;
	text-underline-offset: 20px;
	text-decoration-thickness: 6px;
	@media only screen and (max-width: 768px) {
		font-size: 60px;
	}
`;

const Right = styled.div`
	flex: 2;
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 20px;
	@media only screen and (max-width: 768px) {
		align-items: center;
		text-align: center;
	}
`;

const Desc = styled.p`
	font-size: 24px;
	color: ${(props) => props.$whoDescColor};
`;

const CameraControls = () => {
	const { camera } = useThree();
	const controls = useRef();

	useEffect(() => {
		camera.rotation.x = 3.5;
		camera.rotation.y = 0.5;
		camera.rotation.z = 0.5;
	}, [camera]);

	return (
		<OrbitControls
			ref={controls}
			args={[camera, document.querySelector('canvas')]}
			enableZoom={false}
			enablePan={false}
			enableRotate={true}
			autoRotate={true}
			autoRotateSpeed={0.3}
		/>
	);
};

const Who = () => {
	const { isDark } = useDarkMode();

	return (
		<Section>
			<Container id='my-skills'>
				<Left>
					<Canvas
						camera={{
							position: [0, 0, 7],
							fov: 37,
						}}
					>
						<Cube />
						<CameraControls />
					</Canvas>
				</Left>
				<Right>
					<Title
						$whoTitleColor={
							isDark
								? darkTheme.colors.whoTitleColor
								: lightTheme.colors.whoTitleColor
						}
					>
						My Skills
					</Title>
					<Desc
						$whoDescColor={
							isDark
								? darkTheme.colors.whoDescColor
								: lightTheme.colors.whoDescColor
						}
					>
						HTML, CSS, SASS, JavaScript, Typescript, jQuery, React, Redux
						Toolkit, NextJS
					</Desc>
					<Desc
						$whoDescColor={
							isDark
								? darkTheme.colors.whoDescColor
								: lightTheme.colors.whoDescColor
						}
					>
						NodeJS, ExpressJS, MongoDB, MySQL
					</Desc>
					<Desc
						$whoDescColor={
							isDark
								? darkTheme.colors.whoDescColor
								: lightTheme.colors.whoDescColor
						}
					>
						PHP, Git, Figma, Wordpress
					</Desc>
				</Right>
			</Container>
		</Section>
	);
};

export default Who;
