// components\Who\index.tsx
'use client';
import React, { useEffect, useRef } from 'react';
import { OrbitControls } from '@react-three/drei';
import { Canvas, useThree } from '@react-three/fiber';
import Cube from '../Cube';
import styles from './styles.module.css';
const CameraControls = () => {
	const { camera } = useThree();
	const controls = useRef<any>(null);
	useEffect(() => {
		camera.rotation.x = 3.5;
		camera.rotation.y = 0.5;
		camera.rotation.z = 0.5;
	}, [camera]);
	return (
		<OrbitControls
			ref={controls}
			args={[camera, document.querySelector('canvas') as HTMLElement]}
			enableZoom={false}
			enablePan={false}
			enableRotate={true}
			autoRotate={true}
			autoRotateSpeed={0.3}
		/>
	);
};
const Who: React.FC = () => {
	return (
		<section className={styles.section}>
			<div
				className={styles.container}
				id='my-skills'>
				<div className={styles.left}>
					<Canvas
						camera={{
							position: [0, 0, 7],
							fov: 37,
						}}>
						<Cube />
						<CameraControls />
					</Canvas>
				</div>
				<div className={styles.right}>
					<h1 className={styles.title}>My Skills</h1>
					<p className={styles.desc}>
						HTML, CSS, SASS, JavaScript, Typescript, jQuery, React, Redux
						Toolkit, NextJS
					</p>
					<p className={styles.desc}>NodeJS, ExpressJS, MongoDB, MySQL</p>
					<p className={styles.desc}>PHP, Git, Figma, Wordpress</p>
				</div>
			</div>
		</section>
	);
};
export default Who;
