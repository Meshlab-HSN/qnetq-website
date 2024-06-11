import React from "react"
import { ComposableMap, Geographies, Geography } from "react-simple-maps"
import mapdata from "./mapdata"

const Map = () => {
  return (
    <ComposableMap
      // style={{ backgroundColor: 'pink' }}
      projection='geoMercator'
      projectionConfig={{
        scale: 350,
        center: [15, 50],
        // rotate: [-15.0, -50.0, -3],
      }}
      fill='darkblue'
      stroke='white'
      stroke-width={0.5}
    >
      <Geographies geography={mapdata.data}>
        {(geographies) => {
          return geographies.geographies.map((geo) => {
            return <Geography
              key={geo.rsmKey}
              geography={geo}
              style={{
                hover: {
                  opacity: 0.8,
                },
                // fill:
                  // geo.properties.NAME === 'Germany'
                  //   ? 'darkred'
                  //   : 'green',
              }}
            />;
          });
        }}
      </Geographies>
    </ComposableMap>
  );
};

export default Map;
