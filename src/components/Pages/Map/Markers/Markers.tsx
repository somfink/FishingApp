import { Marker } from "@react-google-maps/api";
import { useSelector } from "react-redux";
import { Cords, rootState } from "../../../../helpers/types";

const centers = [
  { lat: 50.889601, lng: 20.63221 },
  { lat: 50.889424, lng: 20.634102 },
  { lat: 50.887395, lng: 20.633365 },
  { lat: 50.849712, lng: 20.692044 },
];

const Markers = () => {
  const fetchDataState = useSelector(
    (state: rootState) => state.fetchData.markers
  );

  return (
    <>
      {fetchDataState.map((marker: Cords) => (
        <Marker
          icon={{
            url: "./images/fish-marker.png",
          }}
          position={{ lat: Number(marker.lat), lng: Number(marker.lng) }}
          key={marker.id}
        />
      ))}
    </>
  );
};

export default Markers;
