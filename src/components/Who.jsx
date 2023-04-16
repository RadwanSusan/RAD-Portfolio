import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
	height: 100vh;
	scroll-snap-align: center;
	display: flex;
	justify-content: center;
`;
const Container = styled.div`
	height: 100vh;
	width: 1400px;
	display: flex;
	justify-content: space-between;
	scroll-snap-align: center;
`;

const LeftContainer = styled.div`
	flex: 1;
`;
const RightContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 20px;
	flex: 1;
`;
const Title = styled.h1`
	font-family: 'action_man', sans-serif;
	font-size: 40px;
	font-weight: bold;
	color: black;
`;
const Description = styled.p`
	font-family: 'Ubuntu', sans-serif;
	font-size: 20px;
	font-weight: bold;
	color: black;
`;

function Who() {
	return (
		<Section>
			<Container>
				<LeftContainer>{/* 3D Model */}</LeftContainer>
				<RightContainer>
					<Title>
						Hi,
						<br />
						I'm Radwan
						<br />A Full Stack Web Developer
					</Title>
					<Description>
						I'm a Front-End Developer with a passion for
						<br />
						creating beautiful and modern designs.
					</Description>
				</RightContainer>
			</Container>
		</Section>
	);
}

export default Who;
