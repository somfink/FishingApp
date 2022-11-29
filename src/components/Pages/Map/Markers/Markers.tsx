import { Marker } from "@react-google-maps/api";

const centers = [
  { lat: 50.889601, lng: 20.63221 },
  { lat: 50.889424, lng: 20.634102 },
  { lat: 50.887395, lng: 20.633365 },
  { lat: 50.849712, lng: 20.692044 },
];

const Markers = () => {
  return (
    <>
      <Marker
        icon={{
          url: "./images/fish-marker.png",
        }}
        position={centers[0]}
      />
      <Marker
        icon={{
          url: "./images/fish-marker.png",
        }}
        position={centers[1]}
      />
      <Marker
        icon={{
          url: "./images/fish-marker.png",
        }}
        position={centers[2]}
      />
      <Marker
        icon={{
          url: "./images/fish-marker.png",
        }}
        position={centers[3]}
      />
    </>
  );
};

export default Markers;
