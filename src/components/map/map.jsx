import React from "react";
import { Map, Marker } from "pigeon-maps";
import LocationInfo from "../locationInfo/locationInfo";

export function MyMap({
  breweries,
  hoveredData,
  activeData,
  setActiveData,
  position,
  showHoverInfo,
  showFocusInfo,
}) {
  return (
    <>
      <Map defaultCenter={[40.879, 4.6997]} defaultZoom={3} minZoom={2}>
        {breweries.map((brewery, index) => (
          <Marker
            key={index}
            width={50}
            color="#FC7C6C"
            anchor={[
              parseInt(brewery?.latitude) || 50.879,
              parseInt(brewery?.longitude) || 4.6997,
            ]}
            onMouseOver={(e) => showHoverInfo(brewery, e)}
            onClick={(e) => {
              showFocusInfo(brewery, e);
              setActiveData(brewery);
            }}
          />
        ))}
      </Map>
      {hoveredData && (
        <LocationInfo {...{ hoveredData, activeData, position }} />
      )}
    </>
  );
}

// this is just a comment
