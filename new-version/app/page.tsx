// app\page.tsx
'use client';
import React, { lazy, Suspense } from 'react';
import HomePage from '../components/HomePage';
import styles from './page.module.css';

const Who = lazy(() => import('../components/Who'));
const Works = lazy(() => import('../components/Works'));
const Contact = lazy(() => import('../components/Contact'));

export default function Home() {
	return (
		<main className={styles.container}>
			<HomePage />
			<Suspense fallback={null}>
				<Who />
			</Suspense>
			<Suspense fallback={null}>
				<Works />
			</Suspense>
			<Suspense fallback={null}>
				<Contact />
			</Suspense>
		</main>
	);
}
