// components\Navbar\index.tsx
'use client';
import React, { useState, useCallback, useEffect } from 'react';
import Image from 'next/image';
import { useTheme } from '@/contexts/theme-context';
import styles from './styles.module.css';
import { RiSearch2Line, RiMenuLine, RiCloseLine } from 'react-icons/ri';
import { BiMoon, BiSun } from 'react-icons/bi';
import { motion, AnimatePresence } from 'motion/react';
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
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [isMobile, setIsMobile] = useState(false);
	const menuItems: MenuItem[] = [
		{ id: 1, name: 'My Skills', scrollId: 'my-skills' },
		{ id: 2, name: 'About', scrollId: 'about' },
		{ id: 3, name: 'Works', scrollId: 'works' },
		{ id: 4, name: 'Contact', scrollId: 'contact' },
	];
	useEffect(() => {
		const checkIfMobile = () => {
			setIsMobile(window.innerWidth <= 768);
		};
		checkIfMobile();
		window.addEventListener('resize', checkIfMobile);
		return () => window.removeEventListener('resize', checkIfMobile);
	}, []);
	useEffect(() => {
		if (!isMobile && isMobileMenuOpen) {
			setIsMobileMenuOpen(false);
		}
	}, [isMobile, isMobileMenuOpen]);
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
		if (isMobileMenuOpen) {
			setIsMobileMenuOpen(false);
		}
	};
	useEffect(() => {
		if (isMobileMenuOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}
		return () => {
			document.body.style.overflow = '';
		};
	}, [isMobileMenuOpen]);
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
				{/* Mobile menu button */}
				<button
					className={styles.mobileMenuButton}
					onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
					aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}>
					{isMobileMenuOpen ? (
						<RiCloseLine className={styles.iconSvg} />
					) : (
						<RiMenuLine className={styles.iconSvg} />
					)}
				</button>
			</div>
			<AnimatePresence>
				{isMobileMenuOpen && (
					<motion.div
						className={styles.mobileMenu}
						initial={{ x: '100%' }}
						animate={{ x: 0 }}
						exit={{ x: '100%' }}
						transition={{ type: 'tween', duration: 0.3 }}>
						<div className={styles.mobileMenuContent}>
							<div className={styles.mobileMenuHeader}>
								<Image
									alt='Logo'
									src={isDark ? lightLogo : darkLogo}
									height={60}
									width={60}
									className={styles.mobileMenuLogo}
								/>
								<button
									className={styles.mobileMenuCloseButton}
									onClick={() => setIsMobileMenuOpen(false)}
									aria-label='Close menu'>
									<RiCloseLine size={24} />
								</button>
							</div>
							<motion.ul className={styles.mobileMenuList}>
								{menuItems.map((item, index) => (
									<motion.li
										key={item.id}
										initial={{ opacity: 0, y: 20 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ delay: index * 0.1 }}
										className={styles.mobileMenuItem}
										onClick={() => scrollToElement(item.scrollId)}>
										{item.name}
									</motion.li>
								))}
							</motion.ul>
							<div className={styles.mobileMenuFooter}>
								<button
									className={styles.mobileMenuButton}
									onClick={toggleTheme}
									aria-label={
										isDark
											? 'Switch to light mode'
											: 'Switch to dark mode'
									}>
									{!isDark ? (
										<>
											<BiMoon size={18} /> <span>Dark Mode</span>
										</>
									) : (
										<>
											<BiSun size={18} /> <span>Light Mode</span>
										</>
									)}
								</button>
								<button
									className={styles.mobileMenuContactButton}
									onClick={() => scrollToElement('contact')}>
									Contact Me
								</button>
							</div>
						</div>
						<motion.div
							className={styles.mobileMenuOverlay}
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							onClick={() => setIsMobileMenuOpen(false)}
						/>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};
export default Navbar;
