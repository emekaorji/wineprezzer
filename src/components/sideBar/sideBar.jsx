import React from 'react';
import styles from './sideBar.module.css';

function SideBar() {
	return (
		<>
			<nav className={styles.nav}>
				<a href='/' className={styles.logo}>
					WinePrezzer
				</a>
			</nav>
		</>
	);
}

export default SideBar;
