// components\Cube\index.tsx
'use client';
import React, { useCallback } from 'react';
import { ShaderMaterial } from 'three';
import { RoundedBox, Cylinder } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { Bloom, EffectComposer } from '@react-three/postprocessing';
const Cube: React.FC = () => {
	const wireShaderMaterial = new ShaderMaterial({
		uniforms: {
			time: { value: 1.0 },
		},
		vertexShader: `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
		fragmentShader: `
      uniform float time;
      varying vec2 vUv;
      void main() {
        vec2 uv = vUv;
        float movingLine = sin(uv.y * 20.0 + time * 1.0);
        float lineWidth = 0.2;
        float lineColor = smoothstep(lineWidth, 0.0, abs(movingLine));
        gl_FragColor = vec4(vec3(lineColor), 1.0);
      }
    `,
	});
	const handleFrame = useCallback(
		(state: any) => {
			wireShaderMaterial.uniforms.time.value = state.clock.elapsedTime;
		},
		[wireShaderMaterial],
	);
	useFrame(handleFrame);
	return (
		<>
			<RoundedBox
				args={[1.4, 1.4, 1.4]}
				radius={0.09}
				smoothness={2}>
				<primitive
					object={wireShaderMaterial}
					attach='material'
				/>
			</RoundedBox>
			<Cylinder
				args={[0.01, 0.01, 1.2, 32]}
				rotation={[Math.PI / 2, 0, 0]}
			/>
			<Cylinder
				args={[0.01, 0.01, 1.2, 32]}
				rotation={[0, 0, Math.PI / 2]}
			/>
			<EffectComposer>
				<Bloom
					luminanceThreshold={0.0001}
					luminanceSmoothing={0}
					intensity={1}
				/>
			</EffectComposer>
		</>
	);
};
export default React.memo(Cube);
