import React from 'react';
import { Location, Phone } from '../ui/icons';
import styles from './locationInfo.module.css';

function LocationInfo({ hoveredData: info, activeData, position }) {
	return (
		<>
			<div
				className={styles.locationInfo}
				style={{ top: position?.y, left: position?.x }}>
				<h2>{info?.name}</h2>
				<div className={styles.location}>
					<div className={styles.icon}>
						<Location />
					</div>
					<div className={styles.locationText}>
						<p className={styles.street}>{info?.street}</p>
						<p className={styles.country}>
							{info?.state} • {info?.country}
						</p>
					</div>
				</div>
				<a href={`tel: ${info?.phone}`} className={styles.phone}>
					<div className={styles.icon}>
						<Phone />
					</div>
					<p className={styles.number}>{info?.phone}</p>
				</a>
				<a
					className={styles.websiteLink}
					href={info?.website_url || '/'}
					target='_blank'
					rel='noopener noreferrer'>
					Visit the Website here
				</a>
			</div>
		</>
	);
}

export default LocationInfo;
