import React from 'react';
import styles from './breweryInfo.module.css';

function BreweryInfo({ activeData }) {
	if (!activeData) {
		return (
			<div>
				No brewery is selected, click on a point on the map or in the locations
				panel
			</div>
		);
	}
	return (
		<>
			<div className={styles.info}>
				<h1>{activeData?.name}</h1>
			</div>
		</>
	);
}

export default BreweryInfo;
