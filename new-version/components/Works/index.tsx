// components\Works\index.tsx
'use client';
import React from 'react';
import { useTheme } from '@/contexts/theme-context';
import styles from './styles.module.css';
const Works: React.FC = () => {
	const data = [
		'Web Design',
		'Development',
		'Illustration',
		'Product Design',
		'Social Media',
	];
	return (
		<section className={styles.section}>
			<div
				className={styles.container}
				id='works'>
				<div className={styles.left}>
					<ul className={styles.list}>
						{data.map((item) => (
							<li
								key={item}
								className={styles.listItem}
								data-text={item}>
								{item}
							</li>
						))}
					</ul>
				</div>
				<div className={styles.right}>
					<div className={styles.wrapper}>
						<div className={styles.ball} />
						<div className={styles.side1}>
							<span className={styles.spanPink} />
							<span className={styles.spanDarkGreen} />
						</div>
						<div className={styles.side2}>
							<span className={styles.spanPink} />
							<span className={styles.spanBlue} />
						</div>
						<div className={styles.side31}>
							<span className={styles.spanBlue} />
							<span className={styles.spanDarkGreen} />
						</div>
						<div className={styles.side32}>
							<span className={styles.spanBlue} />
							<span className={styles.spanDarkGreen} />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
export default Works;
