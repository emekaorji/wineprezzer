import React from "react";
import styles from "./breweryList.module.css";

function BreweryList({ breweries, setActiveData }) {
  return (
    <>
      <div className={styles.list}>
        {breweries?.map((brewery, index) => (
          <button
            key={index}
            onClick={() => {
              setActiveData(brewery);
            }}
          >
            {brewery?.name}
          </button>
        ))}
      </div>
    </>
  );
}

export default BreweryList;
