import React, { useState } from "react";
import { Search } from "../ui/icons";
import styles from "./searchBar.module.css";

function SearchBar({ setSearchQuery, setActiveNav }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchQuery(input);
    setActiveNav("breweries");
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={styles.searchBar}>
        <span className={styles.icon}>
          <Search />
        </span>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="Search by name, state, country, "
        />
      </form>
    </>
  );
}

export default SearchBar;
