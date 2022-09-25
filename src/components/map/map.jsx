import React, { useEffect, useState } from 'react';
import { Map, Marker } from 'pigeon-maps';
import LocationInfo from '../locationInfo/locationInfo';

export function MyMap() {
	const [brewery, setBrewery] = useState([]);
	const [hoveredData, setHoveredData] = useState(null);

	// eslint-disable-next-line
	const [activeData, setActiveData] = useState([]);
	const [position, setPosition] = useState({ x: 0, y: 0 });

	const fetchData = async () => {
		const response = await fetch(
			'https://api.openbrewerydb.org/breweries?per_page=50'
		);
		const data = await response.json();

		// console.log(data);
		setBrewery(data);
	};

	useEffect(() => {
		const handleLoad = async () => {
			await fetchData();

			const allPointsDiv = Array.from(
				document.querySelectorAll('.pigeon-click-block')
			);
			const allPointsSVGs = Array.from(
				document.querySelectorAll('.pigeon-click-block svg')
			);
			const allPointsG = Array.from(
				document.querySelectorAll('.pigeon-click-block g')
			);
			const allPointsPath = Array.from(
				document.querySelectorAll('.pigeon-click-block path')
			);
			const allPointsCircle = Array.from(
				document.querySelectorAll('.pigeon-click-block circle')
			);
			const allPoints = [
				...allPointsDiv,
				...allPointsSVGs,
				...allPointsG,
				...allPointsPath,
				...allPointsCircle,
			];

			window.addEventListener('click', (event) => {
				if (allPoints.includes(event.target) === false) {
					setHoveredData(null);
				}
			});
		};

		handleLoad();
	}, []);

	const showInfo = (brew, e) => {
		if (hoveredData) {
			setHoveredData(brew);
		} else {
			setTimeout(() => setHoveredData(brew), 1000);
		}
		const {
			event: { pageX, pageY },
		} = e;
		console.log(e.event);
		setPosition({ x: pageX, y: pageY });
	};

	return (
		<>
			<Map defaultCenter={[50.879, 4.6997]} defaultZoom={3}>
				{brewery.map((brew, index) => (
					<Marker
						key={index}
						width={50}
						anchor={[
							parseInt(brew?.latitude) || 50.879,
							parseInt(brew?.longitude || 4.6997),
						]}
						onMouseOver={(e) => showInfo(brew, e)}
						// onMouseOut={hideInfo}
						onClick={(e) => showInfo(brew, e)}
					/>
				))}
			</Map>
			{hoveredData && (
				<LocationInfo {...{ hoveredData, activeData, position }} />
			)}
		</>
	);
}
