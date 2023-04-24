import React, { useState, useEffect, useMemo } from 'react';
import styled from 'styled-components';
import Hero from './components/Hero';
import Who from './components/Who';
import Works from './components/Works';
import Contact from './components/Contact';
import { lightTheme, darkTheme, ThemeContext } from './components/theme';

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
`;

function App() {
	const [theme, setTheme] = useState('light');

	const themeObject = useMemo(
		() => (theme === 'light' ? lightTheme : darkTheme),
		[theme],
	);

	useEffect(() => {
		const prefersDarkMode = window.matchMedia(
			'(prefers-color-scheme: dark)',
		).matches;
		const storedTheme = localStorage.getItem('theme');
		const themeToApply = storedTheme
			? storedTheme
			: prefersDarkMode
			? 'dark'
			: 'light';
		setTheme(themeToApply);
	}, []);

	return (
		<ThemeContext.Provider value={themeObject}>
			<Container
				className='App_Container'
				style={{
					background:
						theme === 'dark'
							? darkTheme.colors.background_Main
							: lightTheme.colors.background_Main,
				}}
			>
				<Hero />
				<Who />
				<Works />
				<Contact />
			</Container>
		</ThemeContext.Provider>
	);
}

export default App;
