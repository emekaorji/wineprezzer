import React, { useEffect, useState } from 'react';
import { Map, Marker } from 'pigeon-maps';
import { stamenTerrain } from 'pigeon-maps/providers';

export function MyMap() {
	const [brewery, setBrewery] = useState([]);

	const fetchData = async () => {
		const response = await fetch(
			'https://api.openbrewerydb.org/breweries?per_page=50'
		);
		const data = await response.json();

		console.log(data);
		setBrewery(data);
	};

	useEffect(() => {
		fetchData();
	}, []);

	const showInfo = () => {};

	return (
		<Map
			provider={stamenTerrain}
			height={600}
			defaultCenter={[50.879, 4.6997]}
			defaultZoom={1}>
			{/* <Marker width={50} anchor={[50.879, 4.6997]} /> */}
			{brewery.map((brew, index) => (
				<Marker
					key={index}
					width={50}
					anchor={[parseInt(brew?.latitude), parseInt(brew?.longitude)]}
					onMouseOver={showInfo}
				/>
			))}
		</Map>
	);
}
