// components\Navbar\index.tsx
'use client';
import React, { useState, useCallback } from 'react';
import Image from 'next/image';
import { useTheme } from '@/contexts/theme-context';
import styles from './styles.module.css';
import { RiSearch2Line } from 'react-icons/ri';
import { BiMoon, BiSun } from 'react-icons/bi';
const lightLogo = '/lightLogoSVG.png';
const darkLogo = '/darkLogoSVG.png';
interface MenuItem {
	id: number;
	name: string;
	scrollId: string;
}
const Navbar: React.FC = () => {
	const { isDark, toggleTheme } = useTheme();
	const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
	const menuItems: MenuItem[] = [
		{ id: 1, name: 'My Skills', scrollId: 'my-skills' },
		{ id: 2, name: 'About', scrollId: 'about' },
		{ id: 3, name: 'Works', scrollId: 'works' },
		{ id: 4, name: 'Contact', scrollId: 'contact' },
	];
	const handleListItemHover = useCallback((index: number | null) => {
		setHoveredIndex(index);
	}, []);
	const handleMouseEnter = useCallback(
		(index: number) => handleListItemHover(index),
		[handleListItemHover],
	);
	const handleMouseLeave = useCallback(
		() => handleListItemHover(null),
		[handleListItemHover],
	);
	const scrollToElement = (id: string) => {
		document.getElementById(id)?.scrollIntoView({
			behavior: 'smooth',
		});
	};
	return (
		<div className={styles.section}>
			<div className={styles.container}>
				<div className={styles.links}>
					<Image
						alt='Logo'
						src={isDark ? lightLogo : darkLogo}
						height={80}
						width={80}
						className={styles.logo}
						onClick={() => scrollToElement('about')}
					/>
					<ul className={styles.list}>
						{menuItems.map((item, index) => {
							const isHovered =
								hoveredIndex !== null && index !== hoveredIndex;
							return (
								<li
									key={item.id}
									className={`${styles.listItem} ${
										isHovered ? styles.faded : ''
									}`}
									onMouseEnter={() => handleMouseEnter(index)}
									onMouseLeave={handleMouseLeave}
									onClick={() => scrollToElement(item.scrollId)}>
									{item.name}
								</li>
							);
						})}
					</ul>
				</div>
				<div className={styles.icons}>
					<button
						className={styles.iconButton}
						aria-label='Search'>
						<RiSearch2Line className={styles.iconSvg} />
					</button>
					<button
						className={styles.iconButton}
						onClick={toggleTheme}
						aria-label={
							isDark ? 'Switch to light mode' : 'Switch to dark mode'
						}>
						{!isDark ? (
							<BiMoon className={styles.iconSvg} />
						) : (
							<BiSun className={styles.iconSvg} />
						)}
					</button>
					<button
						className={styles.button}
						onClick={() => scrollToElement('contact')}>
						Contact
					</button>
				</div>
			</div>
		</div>
	);
};
export default Navbar;
