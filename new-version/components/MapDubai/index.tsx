// components\MapDubai\index.tsx
'use client';
import React from 'react';
import {
	ComposableMap,
	Geographies,
	Geography,
	Annotation,
} from 'react-simple-maps';
import { useTheme } from '@/contexts/theme-context';
const MapDubai: React.FC = () => {
	const { isDark } = useTheme();
	return (
		<ComposableMap
			projection='geoAzimuthalEqualArea'
			projectionConfig={{
				rotate: [-34.0, -47.0, 0],
				center: [20, -21],
				scale: 1200,
			}}
			style={{ width: '100%', height: '100%', pointerEvents: 'none' }}>
			<Geographies
				geography='/features.json'
				fill='#222'
				stroke='#FFFFFF'
				strokeWidth={1}>
				{({ geographies }) =>
					geographies.map((geo) => (
						<Geography
							key={geo.rsmKey}
							geography={geo}
							style={{
								default: { outline: 'none' },
								hover: { outline: 'none' },
								pressed: { outline: 'none' },
							}}
						/>
					))
				}
			</Geographies>
			<Annotation
				subject={[55.4522, 25.3]}
				dx={-60}
				dy={-20}
				connectorProps={{
					stroke: isDark ? 'white' : '#000',
					strokeWidth: 2,
					strokeLinecap: 'round',
				}}>
				<text
					x='-5'
					textAnchor='end'
					alignmentBaseline='middle'
					fill={isDark ? 'white' : '#000'}
					fontSize='20px'
					style={{
						userSelect: 'none',
					}}>
					{'Dubai'}
				</text>
			</Annotation>
		</ComposableMap>
	);
};
export default MapDubai;
