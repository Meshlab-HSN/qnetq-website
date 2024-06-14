import React from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import mapdata from "./mapdata";
import { useHistory } from '@docusaurus/router';
import { Tooltip } from 'react-tooltip';

const Map = () => {
  const history = useHistory();

  const countryConfig = ({ NEIGHBOR, PROJECT }) => {
    let config = {
      onClick: null,
      project: PROJECT,
      color: '',
      style: {},
    };

    switch (NEIGHBOR) {
      case 0:
        config.onClick = () => history.push(`/docs/testbeds/trusted_node`);
        config.color = '#FF8A8A';
        config.style = {
          hover: { opacity: 0.8 }
        };
        break;
      case 1:
        config.color = 'darkgrey';
        config.style = {
          hover: { opacity: 0.8 },
          pressed: { opacity: 0.8 }
        };
        break;
      case 2:
        config.color = 'lightgrey';
        config.style = {
          hover: { opacity: 0.8 },
          pressed: { opacity: 0.8 }
        };
        break;
      default:
        config.color = 'white';
        config.style = {
          default: { opacity: 0.3 },
          hover: { opacity: 0.3 },
          pressed: { opacity: 0.3 }
        }
    }

    return config;
  };

  return (
    <>
      <ComposableMap
        projection='geoMercator'
        projectionConfig={{
          scale: 77,
          center: [6, 57],
        }}
        stroke='white'
        strokeWidth={0.05}
        width='100'
        height='100'
      >
        <Geographies geography={mapdata.data}>
          {(geographies) =>
            geographies.geographies.map((geo) => {
              const config = countryConfig(geo.properties);
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={config.color}
                  style={config.style}
                  onClick={config.onClick}
                  data-tooltip-id="do-not-remove-this"
                  data-tooltip-content={config.project}
                  data-tooltip-float="true"
                />
              );
            })
          }
        </Geographies>
      </ComposableMap>
      <Tooltip id="do-not-remove-this" />
    </>
  );
};

export default Map;
