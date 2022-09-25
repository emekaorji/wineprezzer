import React from 'react';
import { LocationIcon } from '../ui/icons';
import styles from './locationInfo.module.css';

function LocationInfo({ info }) {
	return (
		<>
			<div>
				<h2>{info?.name || 'No name'}</h2>
				<div className={styles.location}>
					<div className={styles.icon}>
						<LocationIcon />
					</div>
				</div>
			</div>
		</>
	);
}

export default LocationInfo;
