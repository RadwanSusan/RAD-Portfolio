import React, { Suspense, lazy } from 'react';
import styled from 'styled-components';
import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

const Cube = lazy(() => import('./Cube'));

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
	justify-content: space-between;
`;

const Left = styled.div`
	flex: 1;
	@media only screen and (max-width: 768px) {
		display: none;
	}
`;

const Title = styled.h1`
	font-size: 74px;
	@media only screen and (max-width: 768px) {
		font-size: 60px;
	}
`;

const Right = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 20px;
	@media only screen and (max-width: 768px) {
		align-items: center;
		text-align: center;
	}
`;

const WhatWeDo = styled.div`
	display: flex;
	align-items: center;
	gap: 10px;
`;

const Line = styled.img`
	height: 5px;
`;

const Subtitle = styled.h2`
	color: #222;
`;

const Desc = styled.p`
	font-size: 24px;
	color: #222;
`;

const Button = styled.button`
	background-color: #222;
	color: white;
	font-weight: 500;
	width: 120px;
	padding: 10px;
	border: none;
	border-radius: 5px;
	cursor: pointer;
`;

const Who = () => {
	return (
		<Section>
			<Container>
				<Left>
					<Canvas
						camera={{ position: [5, 5, 5], fov: 25 }}
						antialias='true'
					>
						<Suspense fallback={null}>
							<ambientLight intensity={0.5} />
							<directionalLight position={[3, 2, 1]} />
							<Cube />
							<OrbitControls
								enableZoom={false}
								autoRotate
							/>
						</Suspense>
					</Canvas>
				</Left>
				<Right>
					<Title>Think outside the square space</Title>
					<WhatWeDo>
						<Subtitle>Who we Are</Subtitle>
					</WhatWeDo>
					<Desc>
						a creative group of designers and developers with a passion
						for the arts.
					</Desc>
					<Button>See our works</Button>
				</Right>
			</Container>
		</Section>
	);
};

export default Who;
