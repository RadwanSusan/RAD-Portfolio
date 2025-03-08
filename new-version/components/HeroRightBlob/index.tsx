// components\HeroRightBlob\index.tsx
'use client';
import React, { useRef, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
import { useTheme } from '@/contexts/theme-context';
const animate = (sphereRef: React.RefObject<THREE.Mesh>) => {
	if (!sphereRef.current) return;
	sphereRef.current.rotation.x += 0.01;
	sphereRef.current.rotation.y += 0.01;
	requestAnimationFrame(() => animate(sphereRef));
};
const onPointerMove = (
	e: React.PointerEvent,
	sphereRef: React.RefObject<THREE.Mesh>,
) => {
	e.preventDefault();
	if (!sphereRef.current) return;
	const { clientX, clientY } = e;
	const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
	const x = ((clientX - left) / width) * 2 - 1;
	const y = -((clientY - top) / height) * 2 + 1;
	sphereRef.current.rotation.x = y * 0.2;
	sphereRef.current.rotation.y = x * 0.2;
};
const HeroRightBlob: React.FC = React.memo(() => {
	const { isDark } = useTheme();
	const sphereRef = useRef<THREE.Mesh>(null);
	useEffect(() => {
		animate(sphereRef);
	}, []);
	return (
		<Canvas style={{ background: 'transparent', pointerEvents: 'none' }}>
			<OrbitControls
				enableZoom={false}
				enableRotate={false}
			/>
			<ambientLight
				intensity={2}
				color={isDark ? 'hsl(261, 100%, 16%)' : 'hsl(229, 19%, 12%)'}
				position={[10, 10, 10]}
			/>
			<directionalLight position={[3, 2, 1]} />
			<directionalLight position={[-3, 2, 1]} />
			<Sphere
				args={[0.9, 100, 200]}
				ref={sphereRef}
				onPointerMove={(e: any) => onPointerMove(e, sphereRef)}
				scale={2.3}>
				<MeshDistortMaterial
					color={isDark ? 'hsl(261, 100%, 16%)' : 'hsl(229, 19%, 12%)'}
					attach='material'
					distort={0.35}
					speed={0.5}
				/>
			</Sphere>
		</Canvas>
	);
});
HeroRightBlob.displayName = 'HeroRightBlob';
export default HeroRightBlob;
