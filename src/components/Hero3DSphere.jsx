import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import {
	OrbitControls,
	Sphere,
	MeshDistortMaterial,
	Text3D,
} from '@react-three/drei';
function Hero3DSphere() {
	return (
		<Canvas>
			<Suspense fallback={null}>
				<OrbitControls
					enableZoom={false}
					autoRotate={true}
					autoRotateSpeed={3}
					rotation={[0, 0, 0]}
				/>
				<ambientLight
					intensity={0.7}
					color='hsl(0, 0%, 100%)'
					position={[10, 10, 10]}
				/>
				<directionalLight position={[3, 2, 1]} />
				<directionalLight position={[-3, 2, 1]} />
				<Sphere
					args={[0.9, 80, 100]}
					scale={2.3}
				>
					<MeshDistortMaterial
						color='hsl(229, 19%, 12%)'
						attach='material'
						distort={0.35}
						speed={0.5}
					/>
				</Sphere>
			</Suspense>
		</Canvas>
	);
}
export default Hero3DSphere;
