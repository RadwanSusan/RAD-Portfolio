import React from 'react';

export const ThemeContext = React.createContext();

export const lightTheme = {
	colors: {
		navBar_Container: 'rgba(255, 255, 255, 0.3)',
		background_Main:
			'linear-gradient(to right, hsl(173, 33%, 95%), hsl(211, 29%, 74%))',
		iconColors: 'rgba(255, 255, 255, 0.3)',
		iconFillColor: 'black',
		linksColor: 'black',
	},
};

export const darkTheme = {
	colors: {
		navBar_Container: 'rgba(0, 0, 0, 0.3)',
		background_Main: 'linear-gradient(to left, #0f0c29, #302b63, #24243e)',
		iconColors: 'rgba(0, 0, 0, 0.3)',
		iconFillColor: 'white',
		linksColor: 'white',
	},
};
