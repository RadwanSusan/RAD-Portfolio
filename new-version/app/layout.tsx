// app\layout.tsx
import type { Metadata } from 'next';
import { ThemeProvider } from '../contexts/theme-context';
import Navbar from '../components/Navbar';
import './globals.css';

export const metadata: Metadata = {
	title: 'RAD Portfolio',
	description: 'A Personal Portfolio [RS]',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<head>
				<link
					href='https://api.fontshare.com/v2/css?f[]=supreme@400&f[]=nunito@800&display=swap'
					rel='stylesheet'
				/>
				<link
					rel='icon'
					type='image/svg+xml'
					href='/DocumentLogo.png'
				/>
			</head>
			<body>
				<ClientThemeProvider>
					<Navbar />
					{children}
				</ClientThemeProvider>
			</body>
		</html>
	);
}

function ClientThemeProvider({ children }: { children: React.ReactNode }) {
	return <ThemeProvider>{children}</ThemeProvider>;
}
