import { useJsApiLoader, GoogleMap } from "@react-google-maps/api";

import { MapContainer } from "./Map.styles";

const center = { lat: 50.874240, lng: 20.633987 };

const Map = () => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyB3B6CGsO7_4wmnAMsKFhQbiPT4zG1Rxa0",
  });

  if (!isLoaded) {
    // DISPLAY LOADING
  }

  return (
    <MapContainer>
      <GoogleMap
        center={center}
        zoom={14}
        mapContainerStyle={{ width: "100%", height: "100%" }}
      ></GoogleMap>
    </MapContainer>
  );
};

export default Map;
