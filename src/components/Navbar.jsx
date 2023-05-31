import React, { Suspense } from 'react';
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
import lightLogo from '/src/media/lightLogoSVG.png';
import darkLogo from '/src/media/darkLogoSVG.png';
import { lightTheme, darkTheme, useDarkMode } from '../contexts/theme-context';

const Section = styled.div`
	position: fixed;
	display: flex;
	justify-content: center;
	z-index: 9999;
	border-radius: 0px 0px 20px 20px;
	-webkit-backdrop-filter: blur(10px);
	backdrop-filter: blur(10px);
	-webkit-user-select: none;
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
	-webkit-user-drag: none;
	user-drag: none;
	cursor: pointer;
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
	text-underline-offset: 6.7px;
	transition: text-underline-offset 0.1s ease-in-out, opacity 0.25s ease-in-out,
		text-decoration 0.1s ease-in-out;
	${(props) => (props.ishovered == 'false' ? ` opacity: 0.3;` : ``)}
	&:hover {
		text-decoration: underline;
		text-underline-offset: 4.7px;
		text-decoration-thickness: 1.5px;
	}
`;

const List = styled.ul`
	display: flex;
	gap: 25px;
	list-style: none;
	transition: all 1.5s ease-in-out;
	&:hover ${ListItem}:hover {
		color: ${(props) => props.$linksColor};
	}
`;

const Navbar = () => {
	const { isDark, toggleDarkMode } = useDarkMode();
	const [hoveredIndex, setHoveredIndex] = React.useState(null);

	const menuItems = [
		{ id: 1, name: 'My Skills', scrollId: 'my-skills' },
		{ id: 2, name: 'About', scrollId: 'about' },
		{ id: 3, name: 'Works', scrollId: 'works' },
		{ id: 4, name: 'Contact', scrollId: 'contact' },
	];

	const handleListItemHover = React.useCallback((index) => {
		setHoveredIndex(index);
	}, []);

	const handleMouseEnter = React.useCallback(
		(index) => handleListItemHover(index),
		[handleListItemHover],
	);

	const handleMouseLeave = React.useCallback(
		() => handleListItemHover(null),
		[handleListItemHover],
	);

	const logoSrc = React.useMemo(() => {
		return isDark ? lightLogo : darkLogo;
	}, [isDark]);

	const sectionStyles = isDark ? darkTheme.colors : lightTheme.colors;
	const containerStyles = isDark
		? darkTheme.colors.navBar_Container
		: lightTheme.colors.navBar_Container;

	return (
		<Suspense fallback={null}>
			<Section
				$SectionBoxShadow={sectionStyles.SectionBoxShadow}
				$SectionBoxBackgroundColor={sectionStyles.SectionBoxBackgroundColor}
			>
				<Container $navBarContainer={containerStyles}>
					<Links>
						<Logo
							alt='Logo'
							src={logoSrc}
							fetchpriority='low'
							onClick={() =>
								document.getElementById('about').scrollIntoView({
									behavior: 'smooth',
								})
							}
						/>
						<List $linksColor={sectionStyles.linksColor}>
							{menuItems.map((item, index) => {
								const isHovered =
									hoveredIndex !== null && index !== hoveredIndex;
								return (
									<ListItem
										key={item.id}
										ishovered={`${!isHovered}`}
										onMouseEnter={() => handleMouseEnter(index)}
										onMouseLeave={handleMouseLeave}
										$linksColor={sectionStyles.linksColor}
										onClick={() =>
											document
												.getElementById(item.scrollId)
												.scrollIntoView({
													behavior: 'smooth',
												})
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
								$iconColors={sectionStyles.iconColors}
								$iconColorsHover={sectionStyles.iconColorsHover}
								$iconBoxShadow={sectionStyles.iconBoxShadow}
								$iconFillColor={sectionStyles.iconFillColor}
								$iconFillColorHover={sectionStyles.iconFillColorHover}
							/>
						</Suspense>
						<Suspense fallback={null}>
							<MoonIcon
								className='moonDarkButton'
								onClick={toggleDarkMode}
								style={{ display: isDark ? 'none' : 'block' }}
								$iconColors={sectionStyles.iconColors}
								$iconColorsHover={sectionStyles.iconColorsHover}
								$iconBoxShadow={sectionStyles.iconBoxShadow}
								$iconFillColor={sectionStyles.iconFillColor}
								$iconFillColorHover={sectionStyles.iconFillColorHover}
							/>
						</Suspense>
						<Suspense fallback={null}>
							<SunIcon
								className='sunLightButton'
								onClick={toggleDarkMode}
								style={{ display: isDark ? 'block' : 'none' }}
								$iconColors={sectionStyles.iconColors}
								$iconColorsHover={sectionStyles.iconColorsHover}
								$iconBoxShadow={sectionStyles.iconBoxShadow}
								$iconFillColor={sectionStyles.iconFillColor}
								$iconFillColorHover={sectionStyles.iconFillColorHover}
							/>
						</Suspense>
						<Button
							onClick={() =>
								document.getElementById('contact').scrollIntoView({
									behavior: 'smooth',
								})
							}
							$backgroundColor={
								sectionStyles.NavbarButtonColorBackground
							}
							$Buttoncolor={sectionStyles.NavbarButtonColor}
							$NavbarButtonBorder={sectionStyles.NavbarButtonBorder}
							$NavbarButtonColorBackgroundHover={
								sectionStyles.NavbarButtonColorBackgroundHover
							}
							$NavbarButtonColorHover={
								sectionStyles.NavbarButtonColorHover
							}
							$NavbarButtonBorderHover={
								sectionStyles.NavbarButtonBorderHover
							}
						>
							Contact
						</Button>
					</Icons>
				</Container>
			</Section>
		</Suspense>
	);
};

export default Navbar;
