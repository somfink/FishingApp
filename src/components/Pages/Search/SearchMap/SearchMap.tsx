import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { type } from "@testing-library/user-event/dist/types/setup/directApi";
import { useState } from "react";
import { mapOptions } from "../../Map/customMapStyles";
import { containerMapStyle, MapContainer } from "../../Map/Map.styles";

const center = { lat: 50.87424, lng: 20.633987 };

type coordinateTypes = {
  lat?: number;
  lng?: number;
};

const SearchMap = () => {
  const latLngInitState = { lat: undefined, lng: undefined };
  const [latLng, setLatLng] = useState<coordinateTypes>(latLngInitState);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyB3B6CGsO7_4wmnAMsKFhQbiPT4zG1Rxa0",
  });

  const clickedCoordinateHandler = (e: google.maps.MapMouseEvent) => {
    const latCord = e.latLng?.lat();
    const lngCord = e.latLng?.lng();
    setLatLng({ lat: latCord, lng: lngCord });

    // console.log(latLng);
    // console.log(center);
  };

  const isLatLngExist =
    typeof latLng.lat === "number" && typeof latLng.lng === "number";

  return (
    <MapContainer>
      {isLoaded && (
        <GoogleMap
          mapContainerStyle={containerMapStyle}
          center={center}
          zoom={15}
          options={mapOptions}
          onClick={clickedCoordinateHandler}
        >
          {isLatLngExist && <Marker position={latLng} />}
        </GoogleMap>
      )}
    </MapContainer>
  );
};

export default SearchMap;
