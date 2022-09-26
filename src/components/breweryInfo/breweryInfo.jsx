import React from "react";
import styles from "./breweryInfo.module.css";
import { Location, Phone } from "../ui/icons";

function BreweryInfo({ activeData }) {
  if (!activeData) {
    return (
      <div className={styles.none}>
        No brewery is selected, click on a point on the map or in the
        'Breweries' panel
      </div>
    );
  }
  return (
    <>
      <div className={styles.info}>
        <div className={styles.infoContainer}>
          <h3>Name:</h3>
          <span>{activeData?.name}</span>
        </div>
        <div className={styles.infoContainer}>
          <h3>Type:</h3>
          <span>{activeData?.brewery_type}</span>
        </div>
        <div className={styles.infoContainer}>
          <h3>
            <span className={styles.icon}>
              <Location />
            </span>
            Address:{" "}
          </h3>
          <span>
            {activeData?.street}, {activeData?.city}, {activeData?.state},{" "}
            {activeData?.country}.
          </span>
        </div>
        <div className={styles.infoContainer}>
          <h3>
            <span className={styles.icon}>
              <Phone />
            </span>
            Phone:
          </h3>
          <span>{activeData?.phone}</span>
        </div>
        <div className={styles.infoContainer}>
          <h3>Website:</h3>
          <a
            href={activeData?.website_url}
            target="_blank"
            rel="noreferrer noopener"
          >
            {activeData?.website_url}
          </a>
        </div>
        <div className={styles.infoContainer}>
          <h3>Dates:</h3>
          <span>
            Updated: {new Date(activeData?.updated_at).toLocaleString()}{" "}
            Created: {new Date(activeData?.created_at).toLocaleString()}
          </span>
        </div>
        {/**
         * brewery_type
         * street, city, state.
         * phone
         * website_url
         * updated_at
         * created_at
         */}
      </div>
    </>
  );
}

export default BreweryInfo;
