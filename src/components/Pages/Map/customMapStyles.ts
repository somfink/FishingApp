const customMapStyles = [
  {
    featureType: "all",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#ffffff",
      },
    ],
  },
  {
    featureType: "all",
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#000000",
      },
      {
        lightness: 13,
      },
    ],
  },
  {
    featureType: "administrative",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#000000",
      },
    ],
  },
  {
    featureType: "administrative",
    elementType: "geometry.stroke",
    stylers: [
      {
        color: "#144b53",
      },
      {
        lightness: 14,
      },
      {
        weight: 1.4,
      },
    ],
  },
  {
    featureType: "landscape",
    elementType: "all",
    stylers: [
      {
        color: "#08304b",
      },
    ],
  },
  {
    featureType: "landscape.man_made",
    elementType: "all",
    stylers: [
      {
        weight: "0.01",
      },
      {
        color: "#9d8484",
      },
    ],
  },
  {
    featureType: "landscape.natural",
    elementType: "all",
    stylers: [
      {
        visibility: "on",
      },
      {
        color: "#87968a",
      },
    ],
  },
  {
    featureType: "landscape.natural.landcover",
    elementType: "all",
    stylers: [
      {
        hue: "#ff0000",
      },
    ],
  },
  {
    featureType: "poi",
    elementType: "geometry",
    stylers: [
      {
        color: "#0c4152",
      },
      {
        lightness: 5,
      },
    ],
  },
  {
    featureType: "poi.attraction",
    elementType: "all",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "poi.business",
    elementType: "all",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "all",
    stylers: [
      {
        color: "#3d664f",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "labels.text",
    stylers: [
      {
        color: "#e8e8e8",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "labels.text.fill",
    stylers: [
      {
        saturation: "42",
      },
      {
        lightness: "-100",
      },
      {
        weight: "7.53",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "labels.text.stroke",
    stylers: [
      {
        lightness: "-10",
      },
      {
        gamma: "2.48",
      },
      {
        weight: "5.62",
      },
      {
        saturation: "5",
      },
      {
        color: "#c6c2c2",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "all",
    stylers: [
      {
        hue: "#ffee00",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#e3936b",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "geometry.stroke",
    stylers: [
      {
        color: "#3d3d3d",
      },
      {
        lightness: 25,
      },
    ],
  },
  {
    featureType: "road.arterial",
    elementType: "all",
    stylers: [
      {
        visibility: "on",
      },
    ],
  },
  {
    featureType: "road.arterial",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#afb69c",
      },
    ],
  },
  {
    featureType: "road.arterial",
    elementType: "geometry.stroke",
    stylers: [
      {
        color: "#0b3d51",
      },
      {
        lightness: 16,
      },
    ],
  },
  {
    featureType: "road.local",
    elementType: "geometry",
    stylers: [
      {
        color: "#000000",
      },
    ],
  },
  {
    featureType: "road.local",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#7b7676",
      },
    ],
  },
  {
    featureType: "road.local",
    elementType: "geometry.stroke",
    stylers: [
      {
        color: "#fefefe",
      },
      {
        weight: "0.01",
      },
    ],
  },
  {
    featureType: "transit",
    elementType: "all",
    stylers: [
      {
        color: "#146474",
      },
    ],
  },
  {
    featureType: "transit.station",
    elementType: "labels.text",
    stylers: [
      {
        color: "#ad5c5c",
      },
    ],
  },
  {
    featureType: "transit.station",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#090808",
      },
    ],
  },
  {
    featureType: "transit.station",
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#ede7e7",
      },
    ],
  },
  {
    featureType: "transit.station.airport",
    elementType: "all",
    stylers: [
      {
        weight: "1.17",
      },
    ],
  },
  {
    featureType: "transit.station.airport",
    elementType: "labels",
    stylers: [
      {
        color: "#fffbfb",
      },
    ],
  },
  {
    featureType: "transit.station.airport",
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#1d1d1d",
      },
      {
        weight: "3.48",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#61cedc",
      },
      {
        visibility: "on",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "geometry.stroke",
    stylers: [
      {
        weight: "5.10",
      },
      {
        saturation: "55",
      },
      {
        lightness: "42",
      },
      {
        gamma: "6.85",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "labels",
    stylers: [
      {
        color: "#040000",
      },
    ],
  },
];

export const mapOptions = {
  styles: customMapStyles,
  streetViewControl: false,
  zoomControl: false,
  fullscreenControl: false,
  minZoom: 5,
  maxZoom: 90,
  restriction: {
    latLngBounds: {
      north: 85,
      south: -85,
      west: -180,
      east: 180,
    },
  },
};
