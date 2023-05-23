import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { csv } from 'd3-fetch';
import { scaleLinear } from 'd3-scale';
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Sphere,
  Graticule,
} from 'react-simple-maps';

const geoUrl =
  'https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json';

const colorScale = scaleLinear()
  .domain([0.29, 0.68])
  .range(['#FAF5FF', '#805AD5']);

const markers = [
  {
    markerOffset: -30,
    name: 'Bangladesh',
    coordinates: [90.412521, 23.810331],
  },
  { markerOffset: 10, name: 'Singapore', coordinates: [103.819839, 1.352083] },
  { markerOffset: 15, name: 'New York', coordinates: [74.006, 40.7128] },
  {
    markerOffset: 15,
    name: 'India',
    coordinates: [78.3119, 20.5204],
  },
];

const Map = ({ setTooltipContent, teamMembers }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    csv(`/vulnerability.csv`).then(data => {
      setData(data);
    });
  }, []);

  return (
    <ComposableMap
      data-tip=""
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [90, 200, 220],
        scale: 600,
      }}
      height={300}
    >
      <Sphere stroke="#E4E5E6" strokeWidth={0.5} />
      <Graticule stroke="#E4E5E6" strokeWidth={0.5} />

      {data.length > 0 && (
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map(geo => {
              const d = data.find(s => s.ISO3 === geo.properties.ISO_A3);

              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={d ? colorScale(d['2017']) : '#eaeaea'}
                  // stroke="#D6D6DA"
                  // style={{
                  //   default: {
                  //     fill: "#D6D6DA",
                  //     outline: "none",
                  //   },
                  //   hover: {
                  //     fill: "#ebf8ff",
                  //     outline: "none",
                  //   },
                  //   pressed: {
                  //     fill: "#E42",
                  //     outline: "none",
                  //   },
                  // }}
                />
              );
            })
          }
        </Geographies>
      )}

      {markers.map(({ name, coordinates, markerOffset }) => (
        <Marker
          onMouseEnter={() => {
            teamMembers.forEach(member => {
              member.city === name && setTooltipContent(member.name);
            });
          }}
          onMouseLeave={() => {
            setTooltipContent('');
          }}
          key={name}
          coordinates={coordinates}
        >
          <g
            fill="none"
            stroke="#FF5533"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            transform="translate(-12, -24)"
            width="50"
          >
            <circle cx="12" cy="10" r="3" />
            <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
          </g>
          <text
            textAnchor="middle"
            y={markerOffset}
            style={{
              fill: 'black',
              fontSize: '12px',
              fontFamily: 'nunito',
            }}
          >
            {name}
          </text>
        </Marker>
      ))}
    </ComposableMap>
  );
};

export default Map;
