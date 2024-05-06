import { GeoJSON, useMap, Marker, Popup, useMapEvents } from "react-leaflet";
import { style } from "./Utils";
import { getColor2 } from "./Utils";
import { useRef, useEffect, useState } from "react";
import L from "leaflet";
import mapData from "@/lib/json/world1.json"
// import * as turf from '@turf/turf';

const World = ({ zoomLevel, infoRef, setSearchResults, searchResults, isMapGeojson, isMobile }) => {
  const map = useMap();
  const findFeatureByName = (name) => {
    return mapData.features.find((feature) => feature.properties.name === name);
  };
  const flyToCountry = (countryName) => {
    const feature = findFeatureByName(countryName);
    if (feature) {

      map.fitBounds(L.geoJSON(feature).getBounds());
    }
  };
  useEffect(() => {
    if (searchResults?.properties?.name !== "United States") {
      flyToCountry(searchResults?.properties?.name);
    } else {
      map.flyTo([55, -140], 3, {
        duration: 2
      }); // Set view tại trung tâm của nước Mỹ với zoom level 4
    }
  }, [searchResults]);


  const geojsonRef = useRef();
  // Mouseover function
  const highlightFeature = (e) => {
    if (zoomLevel > 4) return null
    var layer = e.target;

    layer.setStyle({
      weight: 2,
      color: "#666",
      dashArray: "",
      fillOpacity: 1,
      fillColor: "#4E91F6",
    });

    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
      layer.bringToFront();
    }
    infoRef?.current?.update(layer.feature.properties);
  };

  // Define function for `mouseout`
  const resetHighlight = (e) => {


    geojsonRef?.current?.resetStyle(e.target);
    infoRef?.current?.update(null);
  };

  const zoomToFeature = (e) => {
    setSearchResults(e?.target?.feature?.properties?.name)
    if (e?.target?.feature?.properties?.name !== "United States") {
      map.fitBounds(e.target.getBounds());
    } else {
      map.setView([55, -140], 3); // Set view tại trung tâm của nước Mỹ với zoom level 4
    }


  };


  const style = (feature) => {
    if (feature.properties.name === "Vietnam" && zoomLevel < 5) {
      return {
        fillColor: "#ED4343",
        color: "black",
        weight: 1,
        opacity: 0,
        fillOpacity: 1
      };
    }
    else if (
      (feature.properties.name === searchResults?.properties?.name
        // || feature.properties.name === "United States"
        // || feature.properties.name === "United Kingdom"
        // || feature.properties.name === "Malaysia"
        // || feature.properties.name === "Italy"
        // || feature.properties.name === "Canada"
        // || feature.properties.name === "Japan"
        // || feature.properties.name === "South Korea"
        // || feature.properties.name === "Australia"
      ) &&
      zoomLevel < 5) {
      return {
        fillColor: "#4E91F7",
        color: "black",
        weight: 1,
        opacity: 0,
        fillOpacity: 1
      };
    }
    else
      if (feature.properties.name === searchResults?.properties?.name && zoomLevel > 4) {
        return {
          color: "#4E91F7",
          weight: 3,
          opacity: 1,
          fillOpacity: 0
        };
      }

      else {
        return {
          color: "#333333",
          weight: 0.2,
          fillOpacity: 1,
          fillColor: isMapGeojson ? 'white' : 'transparent'
        };
      }


  };



  const onEachFeature = (feature, layer) => {

    // const calculateArea = () => {

    //   const areaInSquareMeters = turf.area(feature) / 1000000;
    //   let textSize = isMobile ? "text-[1px]" : "text-[3px]";

    //   if (areaInSquareMeters > 3000000) {
    //     textSize = isMobile ? "text-[8px]" : "text-[14px]";
    //   } else if (areaInSquareMeters > 450000) {
    //     textSize = isMobile ? "text-[4px]" : "text-[7px]";
    //   }
    //   else if (areaInSquareMeters > 200000) {
    //     textSize = isMobile ? "text-[2px]" : "text-[4px]";
    //   }
    //   const name = feature.properties.name.split(' ');
    //   const name1 = name
    //     .map((n, i) => `<div key=${i}>${n}</div>`)
    //     .join('')

    //   layer.bindTooltip(`<div class=" flex flex-col items-start">${name1}</div>`, {
    //     direction: "center",
    //     permanent: true,
    //     className: `${textSize} font-plus font-medium labelstyle`,
    //   });
    // };
    // if (zoomLevel < 5) {
    //   calculateArea();
    // }
    // const name = feature.properties.name;

    // layer.bindTooltip(name, {
    //   direction: "center",
    //   permanent: true,
    //   className: `text-[5px] font-plus font-medium labelstyle`,
    // });

    // console.log({ feature, layer });
    // if (feature.properties.name !== 'United States' && feature.properties.name !== 'Canada') {
    if (zoomLevel < 5) {

      layer.on({
        // mouseover: highlightFeature,
        // mouseout: resetHighlight,
        // click: zoomToFeature
      });
    }
    // }
    // popUp(feature, layer)
  };
  // const popUp = (f, l) => {
  //   var out = [];
  //   if (f.properties) {
  //     for (var key in f.properties) {
  //       out.push(key + ": " + f.properties[key]);
  //     }
  //     l.bindPopup(out.join("<br />"));
  //   }
  // };


  function ZoomToWorld() {
    const handleClick = () => {
      map.flyTo([45, -65], 2); // Set view tại trung tâm của nước Mỹ với zoom level 4
    };

    return (
      <button
        onClick={handleClick}
        className="font-extrabold flex space-x-[1rem] opacity-80 items-center justity-center text-[0.9rem] min-w-max text-[#a78bfa] fixed top-[1rem] left-[19rem] z-[1000]"
      >
        Back To World
      </button>
    );

  }

  return (
    <>
      <ZoomToWorld />
      <GeoJSON
        data={mapData}
        style={style}
        onEachFeature={onEachFeature}
        ref={geojsonRef}
      />

    </>

  );
};

export default World;
