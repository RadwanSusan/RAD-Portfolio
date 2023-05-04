import React, { useMemo, useRef, useCallback } from 'react';
import { PerspectiveCamera, RenderTexture, Text } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const Cube = React.memo(() => {
	const textRef = useRef();

	const memoizedTextRef = useMemo(() => textRef, []);

	const handleFrame = useCallback(
		(state) => {
			memoizedTextRef.current.position.x =
				Math.sin(state.clock.elapsedTime) * 2;
		},
		[memoizedTextRef],
	);

	useFrame(handleFrame);

	return (
		<mesh>
			<boxGeometry />
			<meshStandardMaterial>
				<RenderTexture attach='map'>
					<PerspectiveCamera
						makeDefault
						position={[0, 0, 5]}
					/>
					<color
						attach='background'
						args={['#222']}
					/>
					<Text
						ref={textRef}
						fontSize={3}
						color='#fff'
					>
						HELLO
					</Text>
				</RenderTexture>
			</meshStandardMaterial>
		</mesh>
	);
});

export default Cube;
