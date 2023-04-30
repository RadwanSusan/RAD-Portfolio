import React, {
	useState,
	useCallback,
	useEffect,
	useMemo,
	useRef,
} from 'react';
import styled from 'styled-components';
import { RiSearch2Line } from 'react-icons/ri';
import { BiMoon, BiSun } from 'react-icons/bi';
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
	// ! ||--------------------------------------------------------------------------------||
	// ! ||                           Make the box-shadow dynamic
	// ! ||--------------------------------------------------------------------------------||
	${'' /* box-shadow: ${(props) => props.$SectionBoxShadow}; */}
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
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

function Navbar() {
	const [hoveredIndex, setHoveredIndex] = useState(null);
	const logoRef = useRef(null);
	const { isDark, toggleDarkMode } = useDarkMode();

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
		if (isDark) {
			logoRef.current.src = '../../media/lightLogoSVG.png';
		} else {
			logoRef.current.src = '../../media/Untitled4.png';
		}
	}, [isDark]);

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
		<Section
			$SectionBoxShadow={
				isDark ? darkTheme.SectionBoxShadow : lightTheme.SectionBoxShadow
			}
		>
			<Container
				navBar_Container={
					isDark ? darkTheme.navBar_Container : lightTheme.navBar_Container
				}
			>
				<Links>
					<Logo ref={logoRef} />
					<List
						$linksColor={
							isDark
								? darkTheme.colors.linksColor
								: lightTheme.colors.linksColor
						}
					>
						{items.map((item, index) => {
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
					<SearchIcon
						$iconColorsHover={
							isDark
								? darkTheme.colors.iconColorsHover
								: lightTheme.colors.iconColorsHover
						}
						$iconFillColorHover={
							isDark
								? darkTheme.colors.iconFillColorHover
								: lightTheme.colors.iconFillColorHover
						}
						$iconFillColor={
							isDark
								? darkTheme.colors.iconFillColor
								: lightTheme.colors.iconFillColor
						}
						$iconColors={
							isDark
								? darkTheme.colors.iconColors
								: lightTheme.colors.iconColors
						}
						$iconBoxShadow={
							isDark
								? darkTheme.colors.iconBoxShadow
								: lightTheme.colors.iconBoxShadow
						}
					/>
					<MoonIcon
						className='moonDarkButton'
						onClick={toggleDarkMode}
						style={{
							display: isDark ? 'none' : 'block',
						}}
						$iconColorsHover={
							isDark
								? darkTheme.colors.iconColorsHover
								: lightTheme.colors.iconColorsHover
						}
						$iconFillColorHover={
							isDark
								? darkTheme.colors.iconFillColorHover
								: lightTheme.colors.iconFillColorHover
						}
						$iconFillColor={
							isDark
								? darkTheme.colors.iconFillColor
								: lightTheme.colors.iconFillColor
						}
						$iconColors={
							isDark
								? darkTheme.colors.iconColors
								: lightTheme.colors.iconColors
						}
						$iconBoxShadow={
							isDark
								? darkTheme.colors.iconBoxShadow
								: lightTheme.colors.iconBoxShadow
						}
					/>
					<SunIcon
						className='sunLightButton'
						onClick={toggleDarkMode}
						style={{
							display: isDark ? 'block' : 'none',
						}}
						$iconColorsHover={
							isDark
								? darkTheme.colors.iconColorsHover
								: lightTheme.colors.iconColorsHover
						}
						$iconFillColorHover={
							isDark
								? darkTheme.colors.iconFillColorHover
								: lightTheme.colors.iconFillColorHover
						}
						$iconFillColor={
							isDark
								? darkTheme.colors.iconFillColor
								: lightTheme.colors.iconFillColor
						}
						$iconColors={
							isDark
								? darkTheme.colors.iconColors
								: lightTheme.colors.iconColors
						}
						$iconBoxShadow={
							isDark
								? darkTheme.colors.iconBoxShadow
								: lightTheme.colors.iconBoxShadow
						}
					/>
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
}

export default Navbar;
