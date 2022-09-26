import React, { useState } from 'react';
import { Search } from '../ui/icons';
import styles from './searchBar.module.css';

function SearchBar() {
	const [input, setInput] = useState('');

	return (
		<>
			<div className={styles.searchBar}>
				<span className={styles.icon}>
					<Search />
				</span>
				<input
					value={input}
					onChange={(e) => setInput(e.target.value)}
					type='text'
					placeholder='Dummy placeholder'
				/>
			</div>
		</>
	);
}

export default SearchBar;
