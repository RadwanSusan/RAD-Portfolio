import React from 'react';
import styled from 'styled-components';
import Hero from './components/Hero';
import Who from './components/Who';
import Works from './components/Works';
import Contact from './components/Contact';
import { lightTheme, darkTheme, useDarkMode } from './contexts/theme-context';

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
	background: ${(props) => props.background};
`;

function App() {
	const { isDark } = useDarkMode();

	return (
		<Container
			className='App_Container'
			background={
				isDark
					? darkTheme.colors.background_Main
					: lightTheme.colors.background_Main
			}
		>
			<Hero />
			<Who />
			<Works />
			<Contact />
		</Container>
	);
}

export default App;
