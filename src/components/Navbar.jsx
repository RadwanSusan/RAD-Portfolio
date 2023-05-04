import React, {
	useState,
	useCallback,
	useEffect,
	useMemo,
	Suspense,
} from 'react';
import styled from 'styled-components';
const RiSearch2Line = React.lazy(() =>
	import('react-icons/ri').then((module) => ({
		default: module.RiSearch2Line,
	})),
);
const BiMoon = React.lazy(() =>
	import('react-icons/bi').then((module) => ({ default: module.BiMoon })),
);
const BiSun = React.lazy(() =>
	import('react-icons/bi').then((module) => ({ default: module.BiSun })),
);

import { lightTheme, darkTheme, useDarkMode } from '../contexts/theme-context';

const Section = styled.div`
	position: fixed;
	display: flex;
	justify-content: center;
	z-index: 2;
	border-radius: 0px 0px 20px 20px;
	backdrop-filter: blur(10px);
	-webkit-backdrop-filter: blur(10px);
	user-select: none;
	box-shadow: ${(props) => props.$SectionBoxShadow};
	background-color: ${(props) => props.$SectionBoxBackgroundColor};
`;

const Container = styled.div`
	background-color: ${(props) => props.navBar_Container};
	width: 1400px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0px 20px;
	border-radius: 0px 0px 20px 20px;
`;

const Logo = styled.img`
	height: 80px;
	user-drag: none;
	-webkit-user-drag: none;
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
	background-color: ${(props) => props.$iconColors};
	border-radius: 50%;
	transition: all 0.15s ease-in-out;
	fill: ${(props) => props.$iconFillColor};
	box-shadow: ${(props) => props.$iconBoxShadow};
	&:hover {
		background-color: ${(props) => props.$iconColorsHover};
		fill: ${(props) => props.$iconFillColorHover};
		box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.5);
	}
`;

const MoonIcon = styled(BiMoon)`
	transition: all 0.25s ease-in-out;
	font-size: 40px;
	cursor: pointer;
	background-color: ${(props) => props.$iconColors};
	padding: 7px;
	border-radius: 50%;
	transition: all 0.15s ease-in-out;
	fill: ${(props) => props.$iconFillColor};
	box-shadow: ${(props) => props.$iconBoxShadow};
	&:hover {
		background-color: ${(props) => props.$iconColorsHover};
		fill: ${(props) => props.$iconFillColorHover};
		box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.5);
	}
`;

const SunIcon = styled(BiSun)`
	transition: all 0.25s ease-in-out;
	font-size: 40px;
	cursor: pointer;
	background-color: ${(props) => props.$iconColors};
	padding: 7px;
	border-radius: 50%;
	transition: all 0.15s ease-in-out;
	fill: ${(props) => props.$iconFillColor};
	box-shadow: ${(props) => props.$iconBoxShadow};
	&:hover {
		background-color: ${(props) => props.$iconColorsHover};
		fill: ${(props) => props.$iconFillColorHover};
		box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.5);
	}
`;

const Button = styled.button`
	font-family: 'Supreme', sans-serif;
	font-size: 16px;
	width: 100px;
	padding: 10px;
	background-color: ${(props) => props.$backgroundColor};
	color: ${(props) => props.$Buttoncolor};
	border: ${(props) => props.$NavbarButtonBorder};
	font-weight: normal;
	border-radius: 5px;
	cursor: pointer;
	transition: all 0.15s ease-in-out;
	&:hover {
		background-color: ${(props) => props.$NavbarButtonColorBackgroundHover};
		color: ${(props) => props.$NavbarButtonColorHover};
		border: ${(props) => props.$NavbarButtonBorderHover};
	}
`;

const ListItem = styled.li`
	color: ${(props) => props.$linksColor};
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
	${(props) => props.isHovered && ` opacity: 0.3;`}
`;

const List = styled.ul`
	display: flex;
	gap: 25px;
	list-style: none;
	transition: all 1.5s ease-in-out;
	:hover ${ListItem}:hover {
		color: ${(props) => props.$linksColor};
	}
`;

const Navbar = () => {
	const { isDark, toggleDarkMode } = useDarkMode();
	const [hoveredIndex, setHoveredIndex] = useState(null);
	const [logoSrc, setLogoSrc] = useState(
		isDark ? '../../media/lightLogoSVG.png' : '../../media/Untitled4.png',
	);

	const menuItems = useMemo(
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
		setLogoSrc(
			isDark ? '../../media/lightLogoSVG.png' : '../../media/Untitled4.png',
		);
	}, [isDark]);

	const handleMouseEnter = useCallback(
		(index) => handleListItemHover(index),
		[handleListItemHover],
	);

	const handleMouseLeave = useCallback(
		() => handleListItemHover(null),
		[handleListItemHover],
	);

	return (
		<Section
			$SectionBoxShadow={
				isDark
					? darkTheme.colors.SectionBoxShadow
					: lightTheme.colors.SectionBoxShadow
			}
			$SectionBoxBackgroundColor={
				isDark
					? darkTheme.colors.SectionBoxBackgroundColor
					: lightTheme.colors.SectionBoxBackgroundColor
			}
		>
			<Container
				$navBarContainer={
					isDark
						? darkTheme.colors.navBar_Container
						: lightTheme.colors.navBar_Container
				}
			>
				<Links>
					<Logo src={logoSrc} />
					<List
						$linksColor={
							isDark
								? darkTheme.colors.linksColor
								: lightTheme.colors.linksColor
						}
					>
						{menuItems.map((item, index) => {
							const isHovered =
								hoveredIndex !== null && index !== hoveredIndex;
							return (
								<ListItem
									key={item.id}
									isHovered={isHovered}
									onMouseEnter={() => handleMouseEnter(index)}
									onMouseLeave={handleMouseLeave}
									$linksColor={
										isDark
											? darkTheme.colors.linksColor
											: lightTheme.colors.linksColor
									}
								>
									{item.name}
								</ListItem>
							);
						})}
					</List>
				</Links>
				<Icons>
					<Suspense fallback={null}>
						<SearchIcon
							$iconColors={
								isDark
									? darkTheme.colors.iconColors
									: lightTheme.colors.iconColors
							}
							$iconColorsHover={
								isDark
									? darkTheme.colors.iconColorsHover
									: lightTheme.colors.iconColorsHover
							}
							$iconBoxShadow={
								isDark
									? darkTheme.colors.iconBoxShadow
									: lightTheme.colors.iconBoxShadow
							}
							$iconFillColor={
								isDark
									? darkTheme.colors.iconFillColor
									: lightTheme.colors.iconFillColor
							}
							$iconFillColorHover={
								isDark
									? darkTheme.colors.iconFillColorHover
									: lightTheme.colors.iconFillColorHover
							}
						/>
					</Suspense>
					<Suspense fallback={null}>
						<MoonIcon
							className='moonDarkButton'
							onClick={toggleDarkMode}
							style={{ display: isDark ? 'none' : 'block' }}
							$iconColors={
								isDark
									? darkTheme.colors.iconColors
									: lightTheme.colors.iconColors
							}
							$iconColorsHover={
								isDark
									? darkTheme.colors.iconColorsHover
									: lightTheme.colors.iconColorsHover
							}
							$iconBoxShadow={
								isDark
									? darkTheme.colors.iconBoxShadow
									: lightTheme.colors.iconBoxShadow
							}
							$iconFillColor={
								isDark
									? darkTheme.colors.iconFillColor
									: lightTheme.colors.iconFillColor
							}
							$iconFillColorHover={
								isDark
									? darkTheme.colors.iconFillColorHover
									: lightTheme.colors.iconFillColorHover
							}
						/>
					</Suspense>
					<Suspense fallback={null}>
						<SunIcon
							className='sunLightButton'
							onClick={toggleDarkMode}
							style={{ display: isDark ? 'block' : 'none' }}
							$iconColors={
								isDark
									? darkTheme.colors.iconColors
									: lightTheme.colors.iconColors
							}
							$iconColorsHover={
								isDark
									? darkTheme.colors.iconColorsHover
									: lightTheme.colors.iconColorsHover
							}
							$
							$iconBoxShadow={
								isDark
									? darkTheme.colors.iconBoxShadow
									: lightTheme.colors.iconBoxShadow
							}
							$iconFillColor={
								isDark
									? darkTheme.colors.iconFillColor
									: lightTheme.colors.iconFillColor
							}
							$iconFillColorHover={
								isDark
									? darkTheme.colors.iconFillColorHover
									: lightTheme.colors.iconFillColorHover
							}
						/>
					</Suspense>

					<Button
						$backgroundColor={
							isDark
								? darkTheme.colors.NavbarButtonColorBackground
								: lightTheme.colors.NavbarButtonColorBackground
						}
						$Buttoncolor={
							isDark
								? darkTheme.colors.NavbarButtonColor
								: lightTheme.colors.NavbarButtonColor
						}
						$NavbarButtonBorder={
							isDark
								? darkTheme.colors.NavbarButtonBorder
								: lightTheme.colors.NavbarButtonBorder
						}
						$NavbarButtonColorBackgroundHover={
							isDark
								? darkTheme.colors.NavbarButtonColorBackgroundHover
								: lightTheme.colors.NavbarButtonColorBackgroundHover
						}
						$NavbarButtonColorHover={
							isDark
								? darkTheme.colors.NavbarButtonColorHover
								: lightTheme.colors.NavbarButtonColorHover
						}
						$NavbarButtonBorderHover={
							isDark
								? darkTheme.colors.NavbarButtonBorderHover
								: lightTheme.colors.NavbarButtonBorderHover
						}
					>
						Contact
					</Button>
				</Icons>
			</Container>
		</Section>
	);
};

export default Navbar;
