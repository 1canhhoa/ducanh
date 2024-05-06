export function getColor(d) {
  return d > 1000
    ? "#800026"
    : d > 500
      ? "#BD0026"
      : d > 200
        ? "#E31A1C"
        : d > 100
          ? "#FC4E2A"
          : d > 50
            ? "#FD8D3C"
            : d > 20
              ? "#FEB24C"
              : d > 10
                ? "#FED976"
                : "#FFEDA0";
}

export function getColor2(d) {
  return d > 25
    ? "#800026"
    : d > 20
      ? "#E31A1C"
      : d > 15
        ? "#FD8D3C"
        : d > 10
          ? "#FEB24C"
          : d > 5
            ? "#FED976"
            : "#FFEDA0";
}
// functions for styling
export function style(feature) {
  return {
    color: "#333333",
    weight: 0.2,
    fillOpacity: 0,
    fillColor: 'white'
  };
}