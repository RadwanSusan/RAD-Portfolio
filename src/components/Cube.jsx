import React, { useCallback } from 'react';
import { RoundedBox, Cylinder } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
// import { Bloom, Vignette, EffectComposer } from '@react-three/postprocessing';
import { ShaderMaterial, MeshStandardMaterial } from 'three';

const Cube = () => {
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
        float lineWidth = 0.1;
        float lineColor = smoothstep(lineWidth, 0.0, abs(movingLine));
        gl_FragColor = vec4(vec3(lineColor), 1.0);
      }
    `,
	});

	const lineMaterial = new MeshStandardMaterial({
		color: 0xffffff,
		emissive: 222,
		emissiveIntensity: 0.7,
	});

	const handleFrame = useCallback(
		(state) => {
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
				smoothness={100}
			>
				<primitive
					object={wireShaderMaterial}
					attach='material'
				/>
			</RoundedBox>

			<Cylinder
				args={[0.01, 0.01, 1.2, 32]}
				rotation={[Math.PI / 2, 0, 0]}
			>
				<primitive
					object={lineMaterial}
					attach='material'
				/>
			</Cylinder>
			<Cylinder
				args={[0.01, 0.01, 1.2, 32]}
				rotation={[0, 0, Math.PI / 2]}
			>
				<primitive
					object={lineMaterial}
					attach='material'
				/>
			</Cylinder>
			{/* <EffectComposer>
				<Bloom
					luminanceThreshold={0.001}
					luminanceSmoothing={0.5}
					intensity={0.5}
				/>
				<Vignette
					eskil={false}
					offset={0.1}
					darkness={1}
				/>
			</EffectComposer> */}
		</>
	);
};
export default React.memo(Cube);
