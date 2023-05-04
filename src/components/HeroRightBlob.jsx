import React, { useRef, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
import { lightTheme, darkTheme, useDarkMode } from '../contexts/theme-context';

const animate = (sphereRef) => {
	if (!sphereRef.current) return;
	sphereRef.current.rotation.x += 0.01;
	sphereRef.current.rotation.y += 0.01;
	requestAnimationFrame(() => animate(sphereRef));
};

const onPointerMove = (e, sphereRef) => {
	e.preventDefault();
	if (!sphereRef.current) return;
	const { clientX, clientY } = e;
	const { left, top, width, height } = e.target.getBoundingClientRect();
	const x = ((clientX - left) / width) * 2 - 1;
	const y = -((clientY - top) / height) * 2 + 1;
	sphereRef.current.rotation.x = y * 0.2;
	sphereRef.current.rotation.y = x * 0.2;
};

const HeroRightBlob = React.memo(() => {
	const { isDark } = useDarkMode();
	const sphereRef = useRef();
	const ambientLightRef = useRef();
	const position = isDark
		? darkTheme.threeJS.three_Model_Hero_Ambient_Color
		: lightTheme.threeJS.three_Model_Hero_Ambient_Color;
	const color = isDark
		? darkTheme.threeJS.three_Model_Hero_Color
		: lightTheme.threeJS.three_Model_Hero_Color;

	useEffect(() => {
		animate(sphereRef);
	}, [sphereRef]);

	return (
		<Canvas style={{ background: 'transparent', pointerEvents: 'none' }}>
			<OrbitControls
				enableZoom={false}
				enableRotate={false}
			/>
			<ambientLight
				ref={ambientLightRef}
				intensity={2}
				color={position}
				position={[10, 10, 10]}
			/>
			<directionalLight position={[3, 2, 1]} />
			<directionalLight position={[-3, 2, 1]} />
			<Sphere
				args={[0.9, 100, 200]}
				ref={sphereRef}
				onPointerMove={(e) => onPointerMove(e, sphereRef)}
				scale={2.3}
			>
				<MeshDistortMaterial
					color={color}
					attach='material'
					distort={0.35}
					speed={0.5}
				/>
			</Sphere>
		</Canvas>
	);
});

export default HeroRightBlob;
