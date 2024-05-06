import { GeoJSON, useMap, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { useEffect, useRef, useState } from 'react'



const SingleCountry = ({ center, zoom, infoRef, searchResultsState, zoomLevel, geojs, title }) => {
  console.log(center, zoom)
  const map = useMap();
  const geojsonRef = useRef();
  const findFeatureByName = (name) => {
    return geojs?.features?.find((feature) => feature.properties.NAME_1 === name);
  };
  const flyToCountry = (countryName) => {
    const feature = findFeatureByName(countryName);
    if (feature) {
      console.log('L.geoJSON(feature).getBounds()', L.geoJSON(feature).getBounds());
      map.fitBounds(L.geoJSON(feature).getBounds());
    }
  };
  useEffect(() => {
    if (searchResultsState?.properties?.NAME_1 !== "United States") {
      flyToCountry(searchResultsState?.properties?.NAME_1);
    } else {
      map.setView([55, -140], 3); // Set view tại trung tâm của nước Mỹ với zoom level 4
    }
  }, [searchResultsState]);


  // Mouseover function
  const highlightFeature = (e) => {
    if (zoomLevel > 4) return null

    var layer = e.target;

    layer.setStyle({
      weight: 2,
      color: "black",
      dashArray: "",
      fillOpacity: 0,
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
    // console.log({ lll: e.target });
    map.fitBounds(e.target.getBounds())
  };


  const style = (feature) => {
    // console.log({
    //   kkk1111: feature.properties.NAME_1
    // })
    if (feature.properties.NAME_1 === "Massachusetts" && zoomLevel < 5) {
      // Nếu là Việt Nam, trả về phong cách màu đỏ
      return {
        fillColor: "red",
        color: "black",
        weight: 1,
        opacity: 0,
        fillOpacity: 0.5
      };
    } else
      if (feature.properties.NAME_1 === searchResultsState?.properties?.NAME_1 && zoomLevel < 5) {
        return {
          fillColor: "blue",
          color: "black",
          weight: 1,
          opacity: 0,
          fillOpacity: 0.5
        };
      }
      else
        if (feature.properties.NAME_1 === searchResultsState?.properties?.NAME_1 && zoomLevel > 4) {
          return {
            color: "green",
            weight: 3,
            opacity: 1,
            fillOpacity: 0
          };
        }

        else {
          return {
            color: "#333333",
            weight: 0.5,
            fillOpacity: 1,
            fillColor: 'transparent',
            dashArray: "5, 5"
          };
        }


  };
  const onEachFeature = (feature, layer) => {
    layer.on({
      // mouseover: highlightFeature,
      // mouseout: resetHighlight,
      // click: zoomToFeature
    });
    // console.log({ feature, layer })
    // if (map.getZoom() < 5) { // Kiểm tra mức độ thu phóng của bản đồ
    //   if (feature.properties && feature.properties.NAME_1) {
    //     layer.bindTooltip(feature.properties.NAME_1);
    //   }
    // }
    // popUp(feature, layer)
  };
  const popUp = (f, l) => {
    var out = [];
    if (f.properties) {
      for (var key in f.properties) {
        out.push(key + ": " + f.properties[key]);
      }
      l.bindPopup(out.join("<br />"));
    }
  };
  function ZoomOutButton() {
    const map = useMap();

    const handleClick = () => {
      map?.flyTo(center, zoom);
    };

    return (
      <button
        onClick={handleClick}
        className="font-extrabold flex space-x-[1rem] opacity-80 items-center justity-center text-[0.9rem] min-w-max text-[#a78bfa] fixed top-[1rem] left-[27rem] z-[1000]"
      >
        Back To Country
      </button>
    );
  }

  return (

    <>
      <ZoomOutButton />
      <GeoJSON
        key={JSON.stringify(geojs)}
        style={style}
        onEachFeature={onEachFeature}
        data={geojs}
        ref={geojsonRef}
      />
    </>
  )
};

export default SingleCountry;
