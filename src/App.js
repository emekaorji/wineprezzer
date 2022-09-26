import React, { useState, useEffect, useCallback } from "react";
import { MyMap } from "./components/map/map";
import SideBar from "./components/sideBar/sideBar";
import SearchBar from "./components/searchBar/searchBar";

function App() {
  const [hoveredData, setHoveredData] = useState(null);
  const [activeData, setActiveData] = useState(null);

  const [breweries, setBreweries] = useState([]);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const [searchQuery, setSearchQuery] = useState("");

  const fetchData = async () => {
    const response = await fetch(
      "https://api.openbrewerydb.org/breweries?per_page=50"
    );
    const data = await response.json();

    setBreweries(data);
  };

  const fetchSearchedData = useCallback(async () => {
    if (!searchQuery) return;
    const response = await fetch(
      `https://api.openbrewerydb.org/breweries/search?query=${searchQuery}`
    );
    const data = await response.json();

    setBreweries(data);
  }, [searchQuery]);

  const handleClickListener = useCallback(() => {
    const allPointsDiv = Array.from(
      document.querySelectorAll(".pigeon-click-block")
    );
    const allPointsChildren = Array.from(
      document.querySelectorAll(".pigeon-click-block *")
    );
    const allPointsSideBar = Array.from(document.querySelectorAll("#sideNav"));

    const allPoints = [
      ...allPointsDiv,
      ...allPointsChildren,
      ...allPointsSideBar,
    ];

    const clickListener = (event) => {
      if (allPoints.includes(event.target) === false) {
        setHoveredData(null);
        setActiveData(null);
      }
    };

    window.addEventListener("click", clickListener);

    return () => {
      window.removeEventListener("click", clickListener);
    };
  }, []);

  const initializeApp = useCallback(async () => {
    await fetchData();
    setTimeout(() => {
      handleClickListener();
    }, 1000);
  }, [handleClickListener]);

  useEffect(() => {
    initializeApp();
  }, [initializeApp]);

  useEffect(() => {
    fetchSearchedData();
  }, [searchQuery, fetchSearchedData]);

  const showHoverInfo = (brew, e) => {
    if (activeData) return;
    if (hoveredData) {
      setHoveredData(brew);
    } else {
      setTimeout(() => setHoveredData(brew), 500);
    }
    const {
      event: { pageX, pageY },
    } = e;
    setPosition({ x: pageX, y: pageY });
  };

  const showFocusInfo = (brew, e) => {
    setActiveData(brew);
    const {
      event: { pageX, pageY },
    } = e;
    setPosition({ x: pageX, y: pageY });
  };

  return (
    <>
      <SearchBar {...{ setSearchQuery }} />
      <SideBar {...{ breweries, activeData, setActiveData }} />
      <MyMap
        {...{
          breweries,
          hoveredData,
          activeData,
          setActiveData,
          position,
          showHoverInfo,
          showFocusInfo,
        }}
      />
    </>
  );
}

export default App;
