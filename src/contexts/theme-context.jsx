import React, { createContext, useContext, useState, useEffect } from 'react';

const DarkModeContext = createContext();

export const useDarkMode = () => {
	return useContext(DarkModeContext);
};

export const DarkModeProvider = ({ children }) => {
	const [isDark, setIsDark] = useState(() => {
		const storedDarkMode = localStorage.getItem('darkMode');
		return storedDarkMode === 'true' ? true : false;
	});

	useEffect(() => {
		localStorage.setItem('darkMode', isDark);
	}, [isDark]);

	const toggleDarkMode = () => {
		setIsDark((prevIsDark) => !prevIsDark);
	};

	return (
		<DarkModeContext.Provider value={{ isDark, toggleDarkMode }}>
			{children}
		</DarkModeContext.Provider>
	);
};

export const lightTheme = {
	colors: {
		navBar_Container: 'rgba(255, 255, 255, 0.3)',
		background_Main:
			'linear-gradient(to right, hsl(173, 33%, 95%), hsl(211, 29%, 74%))',
		iconColors: 'rgba(255, 255, 255, 0.5)',
		iconFillColor: 'black',
		linksColor: 'black',
		iconColorsHover: 'rgba(255, 255, 255, 1)',
		iconFillColorHover: 'black',
		iconBoxShadow: '0px 0px 4px rgba(0, 0, 0, 0.25)',
		NavbarButtonColor: 'rgba(255, 255, 255, 1)',
		NavbarButtonColorBackground: '#222',
		NavbarButtonColorHover: 'black',
		NavbarButtonColorBackgroundHover: 'rgba(255, 255, 255, 0.7)',
		NavbarButtonBorder: '2px solid #222;',
		NavbarButtonBorderHover: '2px solid black;',
		TitleAndDesc: '#000',
		textTopBorder: '0.7vmin solid black',
		SectionBoxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
		SectionBoxBackgroundColor: 'rgba(255, 255, 255, 0.25)',
	},
	threeJS: {
		three_Model_Hero_Color: 'hsl(229, 19%, 12%)',
		three_Model_Hero_Ambient_Color: 'hsl(229, 19%, 12%)',
	},
};

export const darkTheme = {
	colors: {
		navBar_Container: 'rgba(0, 0, 0, 0.3)',
		background_Main: 'linear-gradient(to left, #0f0c29, #302b63, #24243e)',
		iconColors: 'rgba(255, 255, 255, 0.09)',
		iconFillColor: 'white',
		linksColor: 'white',
		iconColorsHover: 'rgba(255, 255, 255, 0.25)',
		iconFillColorHover: 'white',
		iconBoxShadow: '0px 0px 4px rgba(0, 0, 0, 0.4)',
		NavbarButtonColor: 'rgba(0, 0, 0, 1)',
		NavbarButtonColorBackground: 'rgba(255, 255, 255, 1)',
		NavbarButtonColorHover: 'white',
		NavbarButtonColorBackgroundHover: 'rgba(255, 255, 255, 0.1)',
		NavbarButtonBorder: 'none',
		NavbarButtonBorderHover: '1px solid white;',
		TitleAndDesc: '#fff',
		textTopBorder: '0.7vmin solid white',
		SectionBoxShadow: '0px 4px 4px rgba(0, 0, 0, 0.45)',
		SectionBoxBackgroundColor: 'rgba(0, 0, 0, 0.15)',
	},
	threeJS: {
		three_Model_Hero_Color: 'hsl(261, 100%, 16%)',
		three_Model_Hero_Ambient_Color: 'hsl(261, 100%, 16%)',
	},
};
