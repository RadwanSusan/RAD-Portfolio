// app\layout.tsx
import type { Metadata } from 'next';
import { ThemeProvider } from '../contexts/theme-context';
import Navbar from '../components/ui/Navbar';
import './globals.css';

export const metadata: Metadata = {
	title: 'Riyadh Al-Balushi - Full Stack Developer Portfolio',
	description: 'Explore the professional portfolio of Riyadh Al-Balushi, a passionate Full Stack Developer showcasing innovative projects and technical expertise in web development, UI/UX design, and software engineering.',
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

