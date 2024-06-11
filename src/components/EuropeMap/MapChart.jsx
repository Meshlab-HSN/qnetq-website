import React from "react"
import { ComposableMap, Geographies, Geography } from "react-simple-maps"
import mapdata from "./mapdata"

const Map = () => {
  return (
    <ComposableMap
      // style={{ backgroundColor: 'pink' }}
      projection='geoMercator'
      projectionConfig={{
        scale: 77,
        center: [6, 57],
        // rotate: [-15.0, -50.0, -3],
      }}
      stroke='white'
      stroke-width={0.1}
      width='100'
      height='100'
    >
      <Geographies geography={mapdata.data}>
        {(geographies) => {
          return geographies.geographies.map((geo) => {
            return <Geography
              key={geo.rsmKey}
              geography={geo}
              fill={
                countryColor(geo)
              }
              style={{
                hover: {
                  opacity: 0.8,
                }
              }
            }
            />;
          });
        }}
      </Geographies>
    </ComposableMap>
  );
};

function countryColor(geo) {
  var color;
  if (geo.properties.NEIGHBOR === 0) {
    color = '#FF8A8A'
  } else if (geo.properties.NEIGHBOR === 1) {
    color = 'darkgrey'
  } else {
    color = 'lightgrey'
  }
  return (
    color
  );
};

export default Map;
