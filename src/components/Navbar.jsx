import React, {
	useState,
	useCallback,
	useEffect,
	useMemo,
	useLayoutEffect,
	useRef,
} from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { RiSearch2Line } from 'react-icons/ri';
import { BiMoon, BiSun } from 'react-icons/bi';
import { lightTheme, darkTheme } from './theme';

const Section = styled.div`
	position: fixed;
	display: flex;
	justify-content: center;
	z-index: 2;
	filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
	backdrop-filter: blur(10px);
	user-select: none;
`;
const Container = styled.div`
	background-color: ${(props) => props.theme.colors.navBar_Container};
	border-radius: 0px 0px 20px 20px;
	width: 1400px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0px 20px;
`;

const Logo = styled.img`
	height: 80px;
	user-drag: none;
	-webkit-user-drag: none
`;

const Links = styled.div`
	display: flex;
	align-items: center;
	gap: 40px;
`;

const Icons = styled.div`
	display: flex;
	align-items: center;
	gap: 22px;
`;

const SearchIcon = styled(RiSearch2Line)`
	font-size: 40px;
	cursor: pointer;
	padding: 7px;
	background-color: ${(props) => props.theme.colors.iconColors};
	border-radius: 50%;
	transition: filter 0.2s ease-in-out;
	fill: ${(props) => props.theme.colors.iconFillColor};
	&:hover {
		filter: invert(100%);
	}
`;

const MoonIcon = styled(BiMoon)`
	transition: all 0.25s ease-in-out;
	font-size: 40px;
	cursor: pointer;
	background-color: ${(props) => props.theme.colors.iconColors};
	padding: 7px;
	border-radius: 50%;
	transition: filter 0.2s ease-in-out;
	fill: ${(props) => props.theme.colors.iconFillColor};
	&:hover {
		filter: invert(100%);
	}
`;

const SunIcon = styled(BiSun)`
	transition: all 0.25s ease-in-out;
	font-size: 40px;
	cursor: pointer;
	background-color: ${(props) => props.theme.colors.iconColors};
	padding: 7px;
	border-radius: 50%;
	transition: filter 0.2s ease-in-out;
	fill: ${(props) => props.theme.colors.iconFillColor};
	&:hover {
		filter: invert(100%);
	}
`;

const Button = styled.button`
	font-family: 'Supreme', sans-serif;
	font-size: 15px;
	font-weight: bold;
	width: 100px;
	padding: 10px;
	background-color: #222;
	color: white;
	border: 2px solid #222;
	font-weight: normal;
	border-radius: 5px;
	cursor: pointer;
	transition: all 0.15s ease-in-out;
	&:hover {
		background-color: rgba(255, 255, 255, 0.3);
		color: black;
		font-weight: bold;
	}
`;

const ListItem = styled.li`
	color: ${(props) => props.theme.colors.linksColor};
	font-size: 19px;
	cursor: pointer;
	text-decoration-thickness: 2px;
	text-underline-offset: 4.7px;
	transition: text-underline-offset 0.1s ease-in-out, opacity 0.25s ease-in-out;
	:hover {
		text-decoration: underline;
		text-underline-offset: 7px;
		text-decoration-thickness: 1.5px;
	}
	${(props) =>
		props.isHovered &&
		`
    opacity: 0.3;
  `}
`;

const List = styled.ul`
	display: flex;
	gap: 25px;
	list-style: none;
	transition: all 1.5s ease-in-out;
	:hover ${ListItem}:hover {
		color: ${(props) => props.theme.colors.linksColor};
	}
`;

function Navbar() {
	const [hoveredIndex, setHoveredIndex] = useState(null);
	const [theme, setTheme] = useState('light');
	const logoRef = useRef(null);

	const toggleTheme = useCallback(
		(e) => {
			if (e.target.parentNode.getElementsByTagName('path').length === 1) {
				e.currentTarget.dispatchEvent(new Event('click', { bubbles: true }));
			}
			if (e.target.className.baseVal.split(' ').includes('moonDarkButton')) {
				setTheme('dark');
				localStorage.setItem('theme', 'dark');
				document.getElementsByClassName('App_Container')[0].style.background =
					'linear-gradient(to left, #0f0c29, #302b63, #24243e)';
			}
			if (e.target.className.baseVal.split(' ').includes('sunLightButton')) {
				setTheme('light');
				localStorage.setItem('theme', 'light');
				document.getElementsByClassName('App_Container')[0].style.background =
					'linear-gradient(to right, hsl(173, 33%, 95%), hsl(211, 29%, 74%))';
			}
		},
		[setTheme],
	);

	const items = useMemo(
		() => [
			{ id: 1, name: 'My Skills' },
			{ id: 2, name: 'About' },
			{ id: 3, name: 'Works' },
			{ id: 4, name: 'Contact' },
		],
		[],
	);

	const handleListItemHover = useCallback((index) => {
		setHoveredIndex(index);
	}, []);

	useEffect(() => {
		if (theme === 'dark') {
			logoRef.current.src = '../../media/lightLogoSVG.png';
		} else {
			logoRef.current.src = '../../media/Untitled4.png';
		}
	}, [theme]);

	useLayoutEffect(() => {
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
		document.documentElement.setAttribute('data-theme', themeToApply);
	}, []);

	const themeObject = useMemo(
		() => (theme === 'light' ? lightTheme : darkTheme),
		[theme],
	);

	const handleMouseEnter = useCallback(
		(index) => {
			handleListItemHover(index);
		},
		[handleListItemHover],
	);

	const handleMouseLeave = useCallback(() => {
		handleListItemHover(null);
	}, [handleListItemHover]);

	return (
		<ThemeProvider theme={themeObject}>
			<Section>
				<Container>
					<Links>
						<Logo ref={logoRef} />
						<List>
							{items.map((item, index) => {
								const isHovered =
									hoveredIndex !== null && index !== hoveredIndex;
								return (
									<ListItem
										key={item.id}
										isHovered={isHovered}
										onMouseEnter={() => handleMouseEnter(index)}
										onMouseLeave={handleMouseLeave}
									>
										{item.name}
									</ListItem>
								);
							})}
						</List>
					</Links>
					<Icons>
						<SearchIcon />
						<MoonIcon
							className='moonDarkButton'
							onClick={toggleTheme}
							style={{ display: theme === 'dark' ? 'none' : 'block' }}
						/>
						<SunIcon
							className='sunLightButton'
							onClick={toggleTheme}
							style={{ display: theme === 'light' ? 'none' : 'block' }}
						/>
						<Button>Contact</Button>
					</Icons>
				</Container>
			</Section>
		</ThemeProvider>
	);
}

export default Navbar;
