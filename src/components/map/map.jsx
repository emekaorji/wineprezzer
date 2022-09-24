import React from 'react';
import { Map, Marker } from 'pigeon-maps';

export function MyMap() {
	return (
		<Map height={600} defaultCenter={[50.879, 4.6997]} defaultZoom={11}>
			{/* <Marker width={50} anchor={[50.879, 4.6997]} /> */}
			<Marker width={50} anchor={[32.714813, -117.129593]} />
		</Map>
	);
}
