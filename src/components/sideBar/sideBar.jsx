import React, { useState } from 'react';
import { Arrow } from '../ui/icons';
import styles from './sideBar.module.css';
import Logo from '../../media/logos/wineprezzer-logo.png';
import BreweryList from '../breweryList/breweryList';
import BreweryInfo from '../breweryInfo/breweryInfo';

function SideBar({ breweries, activeData, setActiveData }) {
	const [expanded, setExpanded] = useState(false);
	const [activeNav, setActiveNav] = useState('location');

	const toggleNav = () => setExpanded(!expanded);

	const toggleActiveNav = (navState) => setActiveNav(navState);

	return (
		<>
			<div className={styles.sideBarBehind}></div>
			<nav
				id='sideNav'
				className={styles.nav + (expanded ? ' ' + styles.expanded : '')}>
				<button className={styles.hamburger} onClick={toggleNav}>
					<Arrow />
				</button>
				<div className={styles.navContent}>
					<a href='/' className={styles.logo}>
						<img src={Logo} alt='WinePrezzer' />
					</a>
					<div className={styles.navigation}>
						<button
							className={activeNav === 'info' ? styles.activeNav : ''}
							onClick={() => toggleActiveNav('info')}>
							Info
						</button>
						<button
							className={activeNav === 'location' ? styles.activeNav : ''}
							onClick={() => toggleActiveNav('location')}>
							Location
						</button>
					</div>

					{activeNav === 'info' ? (
						<BreweryInfo {...{ activeData }} />
					) : (
						<BreweryList {...{ breweries, activeData, setActiveData }} />
					)}
				</div>
			</nav>
		</>
	);
}

export default SideBar;
