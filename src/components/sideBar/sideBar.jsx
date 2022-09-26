import React, { useState } from "react";
import { Arrow } from "../ui/icons";
import styles from "./sideBar.module.css";
import Logo from "../../media/logos/wineprezzer-logo.png";
import BreweryList from "../breweryList/breweryList";
import BreweryInfo from "../breweryInfo/breweryInfo";
import useDidMountEffect from "../../hooks/useDidMountEffect";

function SideBar({ breweries, activeData, setActiveData }) {
  const [expanded, setExpanded] = useState(false);
  const [activeNav, setActiveNav] = useState("breweries");

  useDidMountEffect(() => {
    setActiveNav("info");
  }, [activeData]);

  const toggleNav = () => setExpanded(!expanded);

  const toggleActiveNav = (navState) => setActiveNav(navState);

  return (
    <>
      <div className={styles.sideBarBehind}></div>
      <nav
        id="sideNav"
        className={styles.nav + (expanded ? " " + styles.expanded : "")}
        onClick={(e) => e.stopPropagation()}
      >
        <button className={styles.hamburger} onClick={toggleNav}>
          <Arrow />
        </button>
        <div className={styles.navContent}>
          <a href="/" className={styles.logo}>
            <img src={Logo} alt="WinePrezzer" />
          </a>
          <div className={styles.navigation}>
            <button
              className={activeNav === "info" ? styles.activeNav : ""}
              onClick={() => toggleActiveNav("info")}
            >
              Info
            </button>
            <button
              className={activeNav === "breweries" ? styles.activeNav : ""}
              onClick={() => toggleActiveNav("breweries")}
            >
              Breweries
            </button>
          </div>

          {activeNav === "info" ? (
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
