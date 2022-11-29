import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { customMapStyles } from "./customMapStyles";
import { containerMapStyle, MapContainer } from "./Map.styles";
import Markers from "./Markers/Markers";

const center = { lat: 50.87424, lng: 20.633987 };

const Map = () => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyB3B6CGsO7_4wmnAMsKFhQbiPT4zG1Rxa0",
  });

  return (
    <MapContainer>
      {isLoaded && (
        <GoogleMap
          mapContainerStyle={containerMapStyle}
          center={center}
          zoom={15}
          options={{ styles: customMapStyles }}
        >
          <Markers />
        </GoogleMap>
      )}
    </MapContainer>
  );
};

export default Map;
