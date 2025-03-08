// components\LottieRightHero\index.tsx
'use client';
import React, { useEffect, useRef } from 'react';
import Lottie from 'lottie-web';
import styles from './styles.module.css';
const LottieRightHero: React.FC = () => {
	const animationRef = useRef<HTMLDivElement>(null);
	useEffect(() => {
		if (animationRef.current) {
			setTimeout(() => {
				fetch('/141273-web-dev.json')
					.then((response) => response.json())
					.then((animationData) => {
						Lottie.loadAnimation({
							container: animationRef.current!,
							renderer: 'svg',
							loop: false,
							autoplay: true,
							animationData,
						});
					});
			}, 2500);
		}
	}, []);
	return (
		<div
			className={styles.lottieAnimation}
			ref={animationRef}></div>
	);
};
export default LottieRightHero;
