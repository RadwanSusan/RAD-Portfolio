// contexts\theme-context.tsx
'use client';
import React, { createContext, useContext, useState, useEffect } from 'react';
type ThemeContextType = {
	isDark: boolean;
	toggleTheme: () => void;
};
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
export const useTheme = () => {
	const context = useContext(ThemeContext);
	if (context === undefined) {
		throw new Error('useTheme must be used within a ThemeProvider');
	}
	return context;
};
export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
	const [isDark, setIsDark] = useState(false);
	useEffect(() => {
		const storedTheme = localStorage.getItem('darkMode');
		const isDarkMode = storedTheme === 'true';
		setIsDark(isDarkMode);
		document.documentElement.setAttribute(
			'data-theme',
			isDarkMode ? 'dark' : 'light',
		);
	}, []);
	const toggleTheme = () => {
		const newTheme = !isDark;
		setIsDark(newTheme);
		localStorage.setItem('darkMode', String(newTheme));
		document.documentElement.setAttribute(
			'data-theme',
			newTheme ? 'dark' : 'light',
		);
	};
	return (
		<ThemeContext.Provider value={{ isDark, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};
