import React, { lazy, Suspense } from 'react';
import styled from 'styled-components';
import HomePage from './components/HomePage';
const Who = lazy(() => import('./components/Who'));
const Works = lazy(() => import('./components/Works'));
const Contact = lazy(() => import('./components/Contact'));
import { lightTheme, darkTheme, useDarkMode } from './contexts/theme-context';

const Container = styled.div`
	height: 100vh;
	scroll-snap-type: y mandatory;
	scroll-behavior: smooth;
	overflow-y: auto;
	scrollbar-width: none;
	background: ${(props) => (props.background ? props.background : 'white')};
	color: black;
	&::-webkit-scrollbar {
		display: none;
	}
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
			<HomePage />
			<Suspense fallback={null}>
				<Who />
			</Suspense>
			<Suspense fallback={null}>
				<Works />
			</Suspense>
			<Suspense fallback={null}>
				<Contact />
			</Suspense>
		</Container>
	);
}

export default App;
