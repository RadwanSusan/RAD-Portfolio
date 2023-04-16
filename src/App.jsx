import React from 'react';
import styled from 'styled-components';
import Hero from './components/Hero';
import Who from './components/Who';
import Works from './components/Works';
import Contact from './components/Contact';
const Container = styled.div`
	height: 100vh;
	scroll-snap-type: y mandatory;
	scroll-behavior: smooth;
	overflow-y: auto;
	scrollbar-width: none;
	&::-webkit-scrollbar {
		display: none;
	}
	color: black;
	background: linear-gradient(to right, hsl(173, 33%, 95%), hsl(211, 29%, 74%));
`;
function App() {
	return (
		<Container>
			<Hero />
			<Who />
			<Works />
			<Contact />
		</Container>
	);
}

export default App;
