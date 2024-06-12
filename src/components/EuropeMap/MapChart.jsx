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
                countryColor(geo.properties.NEIGHBOR)
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

function countryColor(neighbor) {
  var color;
  
  switch (neighbor) {
    case 0:
      color = '#FF8A8A';
      break;
    case 1:
      color = 'darkgrey';
      break;
    case 2:
      color = 'lightgrey';
      break;
    default:
      color = '#EAEAEA';
  }
  
  return color;
};

export default Map;
