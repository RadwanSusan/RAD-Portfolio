// components\HomePage\index.tsx
'use client';
import React, { useEffect } from 'react';
import { useTheme } from '@/contexts/theme-context';
import styles from './styles.module.css';
import LottieRightHero from '../LottieRightHero';
import HeroRightBlob from '../HeroRightBlob';
const HomePage: React.FC = () => {
	const { isDark } = useTheme();
	useEffect(() => {
		const textTopBorder = document.querySelector('div.text-top');
		if (textTopBorder) {
			textTopBorder.style.borderBottom = isDark
				? 'var(--textTopBorder)'
				: 'var(--textTopBorder)';
		}
	}, [isDark]);
	return (
		<section className={styles.section}>
			<div
				className={styles.container}
				id='about'>
				<div className={styles.leftContainer}>
					<div className={styles.animatedTitle}>
						<div className={`${styles.textTop} text-top`}>
							<div>
								<span>Hi,</span>
								<span>I&apos;m Radwan</span>
								<span>A Full Stack Web Developer</span>
							</div>
						</div>
						<div className={styles.textBottom}>
							<div className={styles.bottomDesc}>
								A Full Stack Web Developer with a passion for creating
								beautiful and modern websites.
							</div>
						</div>
					</div>
				</div>
				<div className={styles.rightContainer}>
					<HeroRightBlob />
					<LottieRightHero />
				</div>
			</div>
		</section>
	);
};
export default HomePage;
