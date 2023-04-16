import React from 'react';
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
	transition: all 0.25s ease-in-out;
	font-size: 40px;
	cursor: pointer;
	padding: 7px;
	background-color: rgba(255, 255, 255, 0.3);
	border-radius: 50%;
	filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.2));
	:hover {
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
	filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.2));
	:hover {
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
	filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.2));
	:hover {
		filter: invert(100%);
	}
`;

const Logo = styled.img`
	height: 80px;
	transition: all 5.55s ease-in-out;
	:hover {
		filter: invert(100%);
	}
`;

const List = styled.ul`
	display: flex;
	gap: 25px;
	list-style: none;
`;

const ListItem = styled.li`
	font-size: 19px;
	cursor: pointer;
	transition: all 0.15s ease-in-out;
	:hover {
		text-decoration: underline;
		text-underline-offset: 5px;
		text-decoration-thickness: 2px;
		text-decoration-color: #222;
	}
`;

const Button = styled.button`
	font-family: 'Ubuntu', sans-serif;
	font-size: 15px;
	font-weight: bold;
	width: 100px;
	padding: 10px;
	background-color: rgba(255, 255, 255, 0.3);
	color: black;
	border: 2px solid #222;
	border-radius: 5px;
	cursor: pointer;
	&:hover {
		background-color: #222;
		color: white;
		font-weight: normal;
	}
`;

function Navbar() {
	return (
		<Section>
			<Container>
				<Links>
					<Logo src='../../media/Untitled4.png' />
					<List>
						<ListItem>My Skills</ListItem>
						<ListItem>About</ListItem>
						<ListItem>Works</ListItem>
						<ListItem>Contact</ListItem>
					</List>
				</Links>
				<Icons>
					<SearchIcon />
					<MoonIcon />
					<SunIcon />
					<Button>Hire Now</Button>
				</Icons>
			</Container>
		</Section>
	);
}

export default Navbar;
