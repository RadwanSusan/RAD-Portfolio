import React, { useState, useCallback, useMemo } from 'react';
import styled from 'styled-components';
import { RiSearch2Line } from 'react-icons/ri';
import { BiMoon, BiSun } from 'react-icons/bi';

const Section = styled.div`
	position: fixed;
	display: flex;
	justify-content: center;
	z-index: 2;
	filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
	backdrop-filter: blur(10px);
`;
const Container = styled.div`
	background-color: rgba(255, 255, 255, 0.3);
	border-radius: 0px 0px 20px 20px;
	width: 1400px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0px 20px;
`;

const Logo = styled.img`
	height: 80px;
	transition: all 5.55s ease-in-out;
	:hover {
		filter: invert(100%);
	}
`;

const Links = styled.div`
	display: flex;
	align-items: center;
	gap: 40px;
`;

const Icons = styled.div`
	display: flex;
	align-items: center;
	gap: 18px;
`;

const SearchIcon = styled(RiSearch2Line)`
	font-size: 40px;
	cursor: pointer;
	padding: 7px;
	background-color: rgba(255, 255, 255, 0.3);
	border-radius: 50%;
	transition: filter 0.2s ease-in-out;
	&:hover {
		filter: invert(100%);
	}
`;

const MoonIcon = styled(BiMoon)`
	transition: all 0.25s ease-in-out;
	font-size: 40px;
	cursor: pointer;
	background-color: rgba(255, 255, 255, 0.3);
	padding: 7px;
	border-radius: 50%;
	transition: filter 0.2s ease-in-out;
	&:hover {
		filter: invert(100%);
	}
`;

const SunIcon = styled(BiSun)`
	transition: all 0.25s ease-in-out;
	font-size: 40px;
	cursor: pointer;
	background-color: rgba(255, 255, 255, 0.3);
	padding: 7px;
	border-radius: 50%;
	transition: filter 0.2s ease-in-out;
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
	background-color: rgba(255, 255, 255, 0.3);
	color: black;
	border: 2px solid #222;
	border-radius: 5px;
	cursor: pointer;
	transition: all 0.15s ease-in-out;
	&:hover {
		background-color: #222;
		color: white;
		font-weight: normal;
	}
`;

const ListItem = styled.li`
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
		color: #000;
	}
	:hover ${SearchIcon} {
		color: #000;
	}
`;

function Navbar() {
	const [hoveredIndex, setHoveredIndex] = useState(null);

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

	return (
		<Section>
			<Container>
				<Links>
					<Logo src='../../media/Untitled4.png' />
					<List>
						{items.map((item, index) => (
							<ListItem
								key={item.id}
								isHovered={hoveredIndex !== null && index !== hoveredIndex}
								onMouseEnter={() => handleListItemHover(index)}
								onMouseLeave={() => handleListItemHover(null)}
							>
								{item.name}
							</ListItem>
						))}
					</List>
				</Links>
				<Icons>
					<SearchIcon />
					<MoonIcon />
					<SunIcon />
					<Button>Contact</Button>
				</Icons>
			</Container>
		</Section>
	);
}

export default Navbar;
