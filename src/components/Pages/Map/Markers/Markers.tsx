import { Marker } from "@react-google-maps/api";
import { useSelector } from "react-redux";
import { Cords, rootState } from "../../../../helpers/types";

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
