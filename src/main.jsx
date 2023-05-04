import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { DarkModeProvider } from './contexts/theme-context';

ReactDOM.createRoot(document.getElementById('root')).render(
	<DarkModeProvider>
		<App />
	</DarkModeProvider>,
);
